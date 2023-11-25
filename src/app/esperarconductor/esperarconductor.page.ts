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
  selector: 'app-esperarconductor',
  templateUrl: './esperarconductor.page.html',
  styleUrls: ['./esperarconductor.page.scss'],
})
export class EsperarconductorPage implements OnInit {
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

    if (this.map) {
      return
    }else{
      this.map = L.map('mapId',{
        zoomControl: false,
      })
      L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}{r}.png', {}).addTo(this.map);
    }
    
    this.obtenerCoordenadas().then(() => {

      this.map.setView([this.latitud, this.longitud], 15);
          
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

  finalizar(){
    this.router.navigate(['/qr'])
  }


}
