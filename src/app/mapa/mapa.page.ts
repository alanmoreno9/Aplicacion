import { Component, Input, NgZone, OnInit } from '@angular/core';

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


  public search: string = '';

  map!: L.Map;

  startPoint: any;
  endPoint: any;

  constructor(
    private router: Router, 
    private menu: MenuController, 
    public fb: FormBuilder,
    private toastController: ToastController,
    private ngZone:  NgZone
  ) { }

  async obtenerCoordenadas(){
    const obtenerCoordenadas = await Geolocation.getCurrentPosition()
    this.latitud = obtenerCoordenadas.coords.latitude;
    this.longitud = obtenerCoordenadas.coords.longitude;
    console.log(this.latitud)
    console.log(this.longitud)
  }

  ngOnInit() {
    this.message("","Cargando Mapa","Esto tardará un poco");
  }
  ionViewDidEnter(){
    this.obtenerCoordenadas().then(() => {
      this.map = L.map('mapId',{
        zoomControl: false,
      }).setView([this.latitud, this.longitud], 15);
      L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}{r}.png', {
      }).addTo(this.map);
      

      this.startPoint = L.latLng(this.latitud, this.longitud)

      this.locationMe = L.marker([this.latitud, this.longitud]).addTo(this.map);
      

    });
  }

  home(){
    this.router.navigate(['/home']);
  }

  valorizaciones(){
    this.router.navigate(['/valorizacionconductor'])
  }

  pagoqr(){
    this.router.navigate(['/pagoqr'])
  }

  solicitudes(){
    this.router.navigate(['/solicitudesconductor'])
  }

  searchChanged(){
    if (!this.search.trim().length) return;

    this.googleAutocomplete.getPlacePredictions({input: this.search}, (predictions: any) =>{
      this.ngZone.run(() => {
        this.searchResults = predictions;
      })
      
    });
  }

  async calcRoute(item: any){
    

    let geocoder = new google.maps.Geocoder()
    this.search = "";
    this.destination = item;

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
      show: false   
    }).addTo(this.map);

    this.control.hide()
    
  }

  esperando(){
    if (this.destino != null) {
      console.log("Iniciar")
    }else{
      this.message('',"Alerta","Debes seleccionar un destino");
    }
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

