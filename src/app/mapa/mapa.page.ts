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


  public search: string = '';

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
      this.map = L.map('mapId',{
        zoomControl: false,
      }).setView([this.latitud, this.longitud], 15);
      L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}{r}.png', {
      }).addTo(this.map);
      


      var marker = L.marker([this.latitud, this.longitud]).addTo(this.map);
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

  searchChanged(){
    if (!this.search.trim().length) return;

    this.googleAutocomplete.getPlacePredictions({input: this.search}, (predictions: any) =>{
      this.searchResults = predictions;
    });
  }

  calcRoute(item: any){
    console.log(item)
  }


}
