import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SolicitudesService } from 'src/app/services/api/solicitudes.service';
import * as L from "leaflet";
import { ConductoresService } from 'src/app/services/api/conductores.service';
import Swal from 'sweetalert2'
import { RutaSolicitudesService } from 'src/app/services/api/ruta-solicitudes.service';

@Component({
  selector: 'app-peticiondetalle',
  templateUrl: './peticiondetalle.page.html',
  styleUrls: ['./peticiondetalle.page.scss'],
})
export class PeticiondetallePage implements OnInit {

  idPeticion: any;
  datosSolicitud: any;
  coords!: L.LatLng;
  map!: L.Map;
  idConductor: any;
  conductorUpdate: any;
  conductor: any;
  updateSolicitud: any;
  datosRuta : any; 
  actualizarRuta: any; 
  crearRuta: any;
  aceptarSoli: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private solicitudService: SolicitudesService,
    private conductoresService: ConductoresService,
    private router: Router, 
    private rutaSolicitudesService: RutaSolicitudesService
  ) { }

  ngOnInit() {
    
  }
  ionViewDidEnter(){
    this.idPeticion = this.activatedRoute.snapshot.paramMap.get("id");
    this.solicitudService.getSolicitud(Number(this.idPeticion)).subscribe(data =>{
      this.datosSolicitud = data
      if (this.datosSolicitud.length > 0) {
        this.coords = L.latLng(this.datosSolicitud[0].ubicacionUser[0], this.datosSolicitud[0].ubicacionUser[1]);
        this.idConductor = this.datosSolicitud[0].idConductor;
        console.log(this.coords)
        if (this.coords) {
          this.generarMapa()
      }
      }else{
        this.message("","Error","Error al generar mapa")
        this.router.navigate(["/esperando"])
      }
    })
  }
  ionViewWillLeave(){
    if (this.map) {
      this.map.off();
      this.map.remove();
    }
  };

  generarMapa(){
      this.map = L.map('mapId',{
        zoomControl: false,
      }).setView([this.coords.lat, this.coords.lng], 15);
      L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}{r}.png', {
      }).addTo(this.map);
      L.marker([this.coords.lat, this.coords.lng]).addTo(this.map).bindPopup('El usuario se encuentra aqui')
      .openPopup();;
  }

  updateConductor() {
    this.solicitudService.getSolicitud(Number(this.idPeticion)).subscribe(
      response => {
        this.aceptarSoli = response
        if (this.aceptarSoli.length > 0) {
          this.conductoresService.getConductor(Number(this.idConductor)).subscribe(data =>{
            this.conductor = data
            if (this.conductor[0].estado === true) {
              if (this.conductor[0].asientosDisponibles > 0 ) {
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
                  estado: true,
                  meUbi: this.conductor[0].meUbi,
                  desUbi: this.conductor[0].desUbi,
                  asientosDisponibles: this.conductor[0].asientosDisponibles - 1
                }
                this.conductoresService.updateConductor(this.conductorUpdate).subscribe(
                  response => {
                    this.updateSolicitud = {
                      idConductor : this.datosSolicitud[0].idConductor,
                      IdUsuario : this.datosSolicitud[0].IdUsuario,
                      ubicacionUser : this.datosSolicitud[0].ubicacionUser,
                      estado : true,
                      id : this.datosSolicitud[0].id
                    }
                    this.solicitudService.updateSolicitud(this.updateSolicitud).subscribe(
                      response => {
                        console.log("Solicitud actualizada ", response);
                        this.router.navigate(['/esperando'])
                        
                      },
                      error => {
                        console.error("error al actualizar solicitud ", error)
                      }
                    )
                  },
                  error => {
                    console.error('Error al actualizar el conductor', error);
                  }
                )
              }else{
                this.message("","Espacio insuficiente","Ya no queda espacio en tu vehiculo")
              }
            }else{
              this.message("","Estás desconectado","Debes conectarte para aceptar solicitudes")
            }
            
          })
          
        }else{

        }
      });
              
    



















    
    

}
rechazarSolicitud(){
  this.solicitudService.deleteSolicitud(this.datosSolicitud[0]).subscribe(
    response => {
      console.log("Solicitud eliminada ", response)
      this.router.navigate(['/esperando'])
    },
    error => {
      console.error("No se pudo eliminar ", error)
    }
  )
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
