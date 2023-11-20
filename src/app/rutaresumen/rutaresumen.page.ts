import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import * as L from "leaflet";

import { Geolocation } from '@capacitor/geolocation'
import 'leaflet-routing-machine';

import { ConductoresService } from '../services/api/conductores.service';

import { FirestoreService } from '../services/firebase/firestore.service';


@Component({
  selector: 'app-rutaresumen',
  templateUrl: './rutaresumen.page.html',
  styleUrls: ['./rutaresumen.page.scss'],
})
export class RutaresumenPage implements OnInit {

  latitud!: number;
  longitud!: number;
  public destination: any;

  conductor: any;
  conductorUpdate: any;
  id: any;

  public search: string = '';

  map!: L.Map;

  startPoint: any;
  endPoint: any;


  constructor(
    private router: Router,
    private conductoresService: ConductoresService,
    private fireStore: FirestoreService
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
    this.id = JSON.parse(localStorage.getItem('usuario')!);
    console.log(this.id)
    this.obtenerCoordenadas().then(() => {
      this.map = L.map('mapId',{
        zoomControl: false,
      }).setView([this.latitud, this.longitud], 15);
      L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}{r}.png', {
      }).addTo(this.map);
      L.marker([this.latitud, this.longitud]).addTo(this.map);
    });
    
  };

  finalizarViaje() {
    const idsAceptados = JSON.parse(localStorage.getItem('idsAceptados') || '[]') as string[];
  
    const eliminacionesId: Promise<void>[] = idsAceptados.map((id: string) =>
        this.fireStore.deleteSolicitud('solicitudes', id)
          .then(() => {
            console.log(`Solicitud ${id} eliminada correctamente`);
          })
          .catch((error) => {
            console.error(`Error al eliminar la solicitud ${id}`, error);
          })
        );
        
      Promise.all(eliminacionesId)
        .then(() => {
          console.log('Todas las solicitudes eliminadas correctamente');
        })

      localStorage.removeItem('idsAceptados');
    
    this.fireStore.getByEmailConductor('conductores', this.id.correo).subscribe(
      (querySnapshot) => {
        this.conductor = querySnapshot.docs[0].data()
        this.conductor.id = querySnapshot.docs[0].id
        if (this.conductor.estado === true) {
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
            estado: false,
            meUbi: this.conductor.meUbi,
            desUbi: this.conductor.desUbi
          }
  
          this.fireStore.updateDocumentConductor('conductores', this.conductor.id, this.conductorUpdate).then(
            () => {
              this.router.navigate(["/pagoqr"]);
            }
          );
        } else {
          console.error("Error");
        }
      }
    );
  }
}