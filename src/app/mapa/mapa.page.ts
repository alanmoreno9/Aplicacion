
import { Component, ElementRef, Input, NgZone, OnInit, Renderer2 } from '@angular/core';

import {
  FormGroup,
  FormControl,
  Validator,
  FormBuilder,
  Validators
} from '@angular/forms'

import { Router } from '@angular/router';
import { MenuController, ToastController } from '@ionic/angular';

import * as L from "leaflet";

import { Geolocation } from '@capacitor/geolocation'
import Swal from 'sweetalert2'
import 'leaflet-routing-machine';

import { FirestoreService } from '../services/firebase/firestore.service';

import { IConductor } from '../interfaces/Iconductor';




declare var google: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  latitud!: number;
  longitud!: number;
  private googleAutocomplete = new google.maps.places.AutocompleteService();
  public searchResults = new Array<any>();
  public destination: any;
  private destino: L.Marker | null = null;
  private locationMe!: L.Marker;
  private control: any | null = null;

  conductor: any;
  conductorUpdate: any;

  public search: string = '';

  map!: L.Map;

  startPoint: any;
  endPoint: any;




  constructor(
    private router: Router, 
    private menu: MenuController, 
    public fb: FormBuilder,
    private toastController: ToastController,
    private ngZone:  NgZone,
    private el: ElementRef,
    private renderer: Renderer2,
    private firestore: FirestoreService

  ) {
    
   }

  async obtenerCoordenadas(){
    const obtenerCoordenadas = await Geolocation.getCurrentPosition()
    this.latitud = obtenerCoordenadas.coords.latitude;
    this.longitud = obtenerCoordenadas.coords.longitude;
  }

  ngOnInit() {
    
    
  }

  ionViewDidEnter(){
    this.conductor = JSON.parse(localStorage.getItem('conductor')!);
    console.log(this.conductor) 
    this.message("","Cargando Mapa","Esto tardará un poco");
    this.obtenerCoordenadas().then(() => {
      this.map = L.map('mapId',{
        zoomControl: false,
      }).setView([this.latitud, this.longitud], 15);
      L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}{r}.png', {
      }).addTo(this.map);
      
      var nuevoIcono = L.icon({
        iconUrl: 'assets/img/auto3.png',
        iconSize: [50, 50],
    });

      const start = L.marker([this.latitud, this.longitud], { icon: nuevoIcono }).addTo(this.map);

      this.startPoint = L.latLng([this.latitud, this.longitud]);
      
    });
  };

  ionViewWillLeave(){
    if (this.map) {
      this.map.off();
      this.map.remove();
    }
  };

  searchChanged(){
    if (!this.search.trim().length) {
      return;
    };

    this.googleAutocomplete.getPlacePredictions({input: this.search}, (predictions: any) =>{
      this.ngZone.run(() => {
        this.searchResults = predictions
      });
      
    });
  }

  async calcRoute(item: any){
    

    let geocoder = new google.maps.Geocoder()
    this.search = "";
    this.destination = item;

    const info: any = await geocoder.geocode({address: this.destination.description})

    console.log(info.results)

    if (this.control !== null) {
      this.map.removeControl(this.control);
    };

    var nuevoIconoEnd = L.icon({
      iconUrl: 'assets/img/llegada.png',
      iconSize: [50, 50],
  });

    this.endPoint = L.latLng([info.results[0].geometry.location.lat(), info.results[0].geometry.location.lng()])

    this.locationMe = L.marker([info.results[0].geometry.location.lat(), info.results[0].geometry.location.lng()], { icon: nuevoIconoEnd }).addTo(this.map);
    
    

    if (this.locationMe !== null) {
      this.map.removeLayer(this.locationMe)
    }

    this.control = L.Routing.control({
      waypoints: [this.startPoint, this.endPoint],
      show: false,
    }).addTo(this.map);

    
      
        
  }

  esperando(){
    
    if (this.endPoint != null) {
      this.updateConductor()
    }else{
      this.message('',"Alerta","Debes seleccionar un destino");
    }
  }


  updateConductor() {
    this.firestore.getByEmailConductor('conductores', this.conductor.correo).subscribe(
      (querySnapshot) => {
        const documentos = querySnapshot.docs;
        if (documentos.length === 0) {
          console.error("No existe el conductor para asignar la ruta")
        }else{
          const primerDocumento = documentos[0];
          if (primerDocumento) {
            const documentId = primerDocumento.id;
            
            this.firestore.getByIdConductor('conductores', documentId).subscribe(
              (documentSnapshot) => {
                const conductor = documentSnapshot.data();
                if (conductor) {
                  var conduAct : IConductor = {
                    apellido: conductor.apellido,
                    asientosDisponibles: conductor.asientosDisponibles,
                    año: conductor.año,
                    contraseña: conductor.contraseña,
                    correo: conductor.correo,
                    desUbi: {lat : this.endPoint.lat, lng : this.endPoint.lng},
                    estado: true,
                    marca: conductor.marca,
                    meUbi: {lat : this.startPoint.lat, lng : this.startPoint.lng},
                    modelo: conductor.modelo,
                    nombre: conductor.nombre,
                    placa: conductor.placa,
                    rut: conductor.rut,
                    telefono: conductor.telefono       
                  }

                  console.log(this.endPoint, this.startPoint)
                  this.firestore.updateDocumentConductor('conductores', documentId, conduAct).then(() => {
                    this.router.navigate(['esperando'])
                  })
                }
                
              }
            )
            
          }else{
            console.error("Primer documento no definido")
          }
        }
      }
    )

  }

  rutaSolicitudes(){
    this.firestore.getByEmailConductor('conductores', this.conductor.correo).subscribe(
      (querySnapshot) => {
        const conductor = querySnapshot.docs[0].data()
        if (conductor.estado === true) {
          this.router.navigate(['/esperando'])
        }else{
          this.message("","Debes conectarte","Selecciona tu ruta para conectarte")
        }
      })
  }

  async message(timerInterval: any, title: String, html: String){
    Swal.fire({
      title: title,
      html: html,
      timer: 2000,
      heightAuto: false,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer()!.querySelector('b');
        timerInterval = setInterval(() => {
          const timerLeft = Swal.getTimerLeft();
          if (typeof timerLeft === 'number') {
            b!.textContent = timerLeft.toString();
          }
        }, 2000)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })
  }


}

