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
  selector: 'app-rutaresumen',
  templateUrl: './rutaresumen.page.html',
  styleUrls: ['./rutaresumen.page.scss'],
})
export class RutaresumenPage implements OnInit {

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
  id: any;

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
    


  }

  ionViewDidEnter(){
    this.id = JSON.parse(localStorage.getItem('conductor')!);
    console.log(this.id)
    this.obtenerCoordenadas().then(() => {
      this.map = L.map('mapId',{
        zoomControl: false,
      }).setView([this.latitud, this.longitud], 15);
      L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}{r}.png', {
      }).addTo(this.map);

      this.locationMe = L.marker([this.latitud, this.longitud]).addTo(this.map);
    });
    
  };
  ionViewWillLeave(){
    if (this.map) {
      this.map.off();
      this.map.remove();
    }
  };
  finalizarViaje(){
    this.conductoresService.getConductor(this.id.id).subscribe(data =>{
      this.conductor = data
      console.log(this.conductor)
      if (this.conductor[0].estado === true) {
          this.conductorUpdate = {
            id: this.conductor[0].id,
            nombre: this.conductor[0].nombre,
            apellido: this.conductor[0].apellido,
            correo: this.conductor[0].correo,
            contraseña: this.conductor[0].contraseña,
            telefono: this.conductor[0].telefono,
            marca: this.conductor[0].marca,
            modelo: this.conductor[0].modelo,
            año: this.conductor[0].año,
            placa: this.conductor[0].placa,
            rut: this.conductor[0].rut,
            estado: false,
            meUbi: this.conductor[0].meUbi,
            desUbi: this.conductor[0].desUbi
          }
          this.conductoresService.updateConductor(this.conductorUpdate).subscribe(
            response => {
              this.router.navigate(["/home"])
            },
            error => {
              console.error('Error al actualizar el conductor', error);
            }
          )
        
      }else{
        console.error("Error")
      }
      
    })
  }

}
