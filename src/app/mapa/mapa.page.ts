import { Component, Input, OnInit } from '@angular/core';

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

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  latitud!: number;
  longitud!: number;

  map!: L.Map;

  constructor(
    private router: Router, 
    private menu: MenuController, 
    public fb: FormBuilder,
    private toastController: ToastController
  ) { 
  

  }

  async obtenerCoordenadas(){
    const obtenerCoordenadas = await Geolocation.getCurrentPosition()
    this.latitud = obtenerCoordenadas.coords.latitude;
    this.longitud = obtenerCoordenadas.coords.longitude;
    console.log(this.latitud)
    console.log(this.longitud)
  }

  ngOnInit() {
    
  }
  ionViewDidEnter(){
    

    this.obtenerCoordenadas().then(() => {
      this.map = L.map('mapId').setView([this.latitud, this.longitud], 6);
      L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(this.map);
    });
    
  }

  home(){
    this.router.navigate(['/home']);
  }

  resenas(){
    this.router.navigate(['/usuarios'])
  }

  pago(){
    this.router.navigate(['/metodopago'])
  }

  tarjetas(){
    this.router.navigate(['/mistarjetas'])
  }

}
