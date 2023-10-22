
import { Router } from '@angular/router';
import { ConductoresService } from '../services/api/conductores.service';
import { Component, Input, OnInit } from '@angular/core';

import {
  FormGroup,
  FormControl,
  Validator,
  FormBuilder,
  Validators
} from '@angular/forms'

import { MenuController, ToastController } from '@ionic/angular';

import * as L from "leaflet";

import { Geolocation } from '@capacitor/geolocation'

declare var google: any;

@Component({
  selector: 'app-buscando',
  templateUrl: './buscando.page.html',
  styleUrls: ['./buscando.page.scss'],
})
export class BuscandoPage implements OnInit {
  latitud!: number;
  longitud!: number;
  private googleAutocomplete = new google.maps.places.AutocompleteService();
  public searchResults = new Array<any>();


  public search: string = '';

  map!: L.Map;


  constructor(private router: Router,
              private ConductoresApi: ConductoresService,
 
              private menu: MenuController, 
              public fb: FormBuilder,
             private toastController: ToastController) { }

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

  ionViewWillEnter(){
    this.obtenerCoordenadas().then(() => {
      this.map = L.map('mapId',{
        zoomControl: false,
      }).setView([this.latitud, this.longitud], 15);
      L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}{r}.png', {
      }).addTo(this.map);
      


      var marker = L.marker([this.latitud, this.longitud]).addTo(this.map);
    });
  }


  async obtenerCoordenadas(){
    const obtenerCoordenadas = await Geolocation.getCurrentPosition()
    this.latitud = obtenerCoordenadas.coords.latitude;
    this.longitud = obtenerCoordenadas.coords.longitude;
    console.log(this.latitud)
    console.log(this.longitud)
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
