import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as L from "leaflet";
import 'leaflet-routing-machine';
import { Geolocation } from '@capacitor/geolocation'
import { FirestoreService } from '../services/firebase/firestore.service';


@Component({
  selector: 'app-detallemapconductor',
  templateUrl: './detallemapconductor.page.html',
  styleUrls: ['./detallemapconductor.page.scss'],
})
export class DetallemapconductorPage implements OnInit {

  conductor: any;

  map!: L.Map;

  idConductor: any;

  ubicacion: any;

  destino: any;

  rutaControl: any;
  
  UbicacionUser: any;

  userActivo: any;

  idUser: any;

  idPeticion: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fireStore: FirestoreService
  ) { }

  ngOnInit() {
    
    
  }
  ionViewDidEnter(){
    this.idConductor = this.activatedRoute.snapshot.paramMap.get("id");
    if (this.idConductor) {
      this.obtenerConductor()
    }
    console.log(this.idConductor)
  }
  
  async obtenerConductor(){
    this.fireStore.getByEmailConductor('conductores', this.idConductor).subscribe(
      (querySnapshot) => {
        this.conductor = querySnapshot.docs[0].data()
        this.ubicacion = this.conductor.meUbi
        this.destino = this.conductor.desUbi
        console.log(this.conductor, this.ubicacion, this.destino)
        
          this.map = L.map('mapId', {
            zoomControl: false,
          }).setView([this.ubicacion.lat, this.ubicacion.lng], 15);
          L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}{r}.png', {
          }).addTo(this.map);
          
          if (this.map) {
            this.calcularRuta()
            this.obtenerCoordenadas().then(() => {
              L.marker(this.UbicacionUser).addTo(this.map).bindPopup('Tú estás aquí').openPopup();
            })
          }
        
      }
    )
  }


  calcularRuta(){
    L.Routing.control({
      waypoints: [this.ubicacion, this.destino],
      show: false, 
    }).addTo(this.map);
  }

  async obtenerCoordenadas(){
    const obtenerCoordenadas = await Geolocation.getCurrentPosition()
    this.UbicacionUser = [obtenerCoordenadas.coords.latitude, obtenerCoordenadas.coords.longitude];
    return this.UbicacionUser;
  }
  
  generarSolicitud(){
    this.userActivo = JSON.parse(localStorage.getItem('usuario')!);

    var solicitud = {
      idConductor: this.idConductor,
      IdUsuario: this.userActivo.id,
      ubicacionUser: this.UbicacionUser,
      estado: false
    }
   
  }
}
