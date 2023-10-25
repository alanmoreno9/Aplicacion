




import { Component, ElementRef, Input, NgZone, OnInit } from '@angular/core';

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

import { ConductoresService } from '../services/api/conductores.service';





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
    private conductoresService: ConductoresService,
    private el: ElementRef,

  ) { }

  async obtenerCoordenadas(){
    const obtenerCoordenadas = await Geolocation.getCurrentPosition()
    this.latitud = obtenerCoordenadas.coords.latitude;
    this.longitud = obtenerCoordenadas.coords.longitude;
    console.log(this.latitud)
    console.log(this.longitud)
  }

  ngOnInit() {
    
    this.conductor = JSON.parse(localStorage.getItem('conductor')!);
    console.log(this.conductor)

  }

  ionViewDidEnter(){
    this.message("","Cargando Mapa","Esto tardará un poco");
    this.obtenerCoordenadas().then(() => {
      this.map = L.map('mapId',{
        zoomControl: false,
      }).setView([this.latitud, this.longitud], 15);
      L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}{r}.png', {
      }).addTo(this.map);
      

      this.startPoint = L.latLng(this.latitud, this.longitud)

      this.locationMe = L.marker([this.latitud, this.longitud]).addTo(this.map);
      
     
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
    

    document.getElementById('route-instructions')!.style.display = 'none';

    
    const info: any = await geocoder.geocode({address: this.destination.description})

    console.log(info.results)

    if (this.destino !== null) {
      this.map.removeLayer(this.destino);
    }
    if (this.control !== null) {
      this.map.removeControl(this.control);
    };

    this.endPoint = L.latLng(info.results[0].geometry.location.lat(), info.results[0].geometry.location.lng())

    this.destino = L.marker([info.results[0].geometry.location.lat(), info.results[0].geometry.location.lng()]).addTo(this.map);

    this.control = L.Routing.control({
      waypoints: [this.startPoint, this.endPoint],
      show: false,
    }).addTo(this.map);

    this.control.hide();

    this.control.on('routeselected', (e: any) => {
      const instructionsDiv = document.getElementById('route-instructions');
      if (instructionsDiv) {
        instructionsDiv.innerHTML = '';
        e.route.instructions.forEach((instruction: L.Routing.IInstruction) => {
          const instructionElement = document.createElement('div');
          instructionElement.textContent = instruction.text!;
          instructionsDiv.appendChild(instructionElement);
          
        });
      }
    });
        
  }

  esperando(){
    
    if (this.destino != null) {
      this.updateConductor();
      this.router.navigate(['esperando'])
    }else{
      this.message('',"Alerta","Debes seleccionar un destino");
    }
  }


  updateConductor() {
    this.conductorUpdate = {
      id: this.conductor.id,
      nombre: this.conductor.nombre,
      apellido: this.conductor.apellido,
      correo: this.conductor.correo,
      contraseña: this.conductor.contraseña,
      telefono: this.conductor.telefono,
      marca: this.conductor.marca,
      modelo: this.conductor.modelo,
      año: this.conductor.año,
      placa: this.conductor.placa,
      rut: this.conductor.rut,
      estado: true,
      meUbi: this.startPoint,
      desUbi: this.endPoint,
      asientosDisponibles: 4
    }

    this.conductoresService.updateConductor(this.conductorUpdate).subscribe(
      response => {
        console.log('Conductor actualizado con éxito', response);
      },
      error => {
        console.error('Error al actualizar el conductor', error);
      }
    )
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

