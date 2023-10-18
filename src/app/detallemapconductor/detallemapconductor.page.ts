import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConductoresService } from '../services/api/conductores.service';
import * as L from "leaflet";
import 'leaflet-routing-machine';
import { Geolocation } from '@capacitor/geolocation'
import { Isolicitud } from '../interfaces/isolicitud';
import { SolicitudesService } from '../services/api/solicitudes.service';


@Component({
  selector: 'app-detallemapconductor',
  templateUrl: './detallemapconductor.page.html',
  styleUrls: ['./detallemapconductor.page.scss'],
})
export class DetallemapconductorPage implements OnInit {

  conductor!: any;

  map!: L.Map;

  idConductor: any;

  ubicacion: any;

  destino: any;

  rutaControl: any;
  
  UbicacionUser: any;

  userActivo: any;

  idUser: any;

  constructor(
    private conductoresService: ConductoresService,
    private activatedRoute: ActivatedRoute,
    private solicitudesService: SolicitudesService
  ) { }

  ngOnInit() {
    

    this.idConductor = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(this.idConductor)

    this.conductoresService.getConductor(Number(this.idConductor)).subscribe(data =>{
      
      this.conductor = data;
      this.ubicacion = this.conductor[0].meUbi;
      this.destino = this.conductor[0].desUbi;
      console.log(this.ubicacion, this.destino);

      this.iniciarMapa()
      this.calcularRuta()
      this.obtenerCoordenadas()
      
    });
  }


  iniciarMapa() {
    if (this.ubicacion && this.destino) {
      this.map = L.map('mapId', {
        zoomControl: false,
      });
      L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}{r}.png', {
      }).addTo(this.map);
    } else {
      console.log('sin coordenadas');
    }
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

    var solicitud: Isolicitud ={
      idConductor: this.idConductor,
      IdUsuario: this.userActivo.id,
      ubicacionUser: this.UbicacionUser
    }

    this.solicitudesService.addSolicitud(solicitud).subscribe();

  }
}
