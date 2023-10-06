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

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  map!: L.Map;

  constructor(
    private router: Router, 
    private menu: MenuController, 
    public fb: FormBuilder,
    private toastController: ToastController
  ) { 
  
  }

  

  ngOnInit() {
    
  }
  ionViewDidEnter(){
    this.map= L.map('mapId').setView([-0.09 ,51.505], 6);
    L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}{r}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);
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
