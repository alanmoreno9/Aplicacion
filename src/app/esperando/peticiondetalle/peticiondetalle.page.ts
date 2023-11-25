import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as L from "leaflet";
import Swal from 'sweetalert2'
import { FirestoreService } from 'src/app/services/firebase/firestore.service';

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
    private router: Router, 
    private fireStore: FirestoreService
  ) { }

  ngOnInit() {
    this.ionViewDidEnter()
  }
  ionViewDidEnter(){
    this.idPeticion = this.activatedRoute.snapshot.paramMap.get("id");
    if (this.map) {
      return
    }else{
      this.map = L.map('mapId',{
        zoomControl: false,
      })
      L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}{r}.png', {
      }).addTo(this.map);
    }
    
    

    this.fireStore.getByIdSolicitud('solicitudes', this.idPeticion).subscribe(
      (querySnapshot) => {
        this.datosSolicitud = querySnapshot.data()
        if (this.datosSolicitud) {
          this.coords = L.latLng(this.datosSolicitud.ubicacionUser[0], this.datosSolicitud.ubicacionUser[1]);
          
          this.idConductor = this.datosSolicitud.idConductor
          if (this.coords) {
            this.map.setView([this.coords.lat, this.coords.lng], 15)
            L.marker([this.coords.lat, this.coords.lng]).addTo(this.map).bindPopup('El usuario se encuentra aqui').openPopup();;
          }
        }else{
        this.message("","Error","Error al generar mapa")
        this.router.navigate(["/esperando"])
        }
      }
    )
  }
  ionViewWillLeave(){
    if (this.map) {
      this.map.off();
      this.map.remove();
    }
  };

  updateConductor() {
    this.fireStore.getByIdSolicitud('solicitudes', this.idPeticion).subscribe(
      (querySnapshot) => {
        this.aceptarSoli = querySnapshot.data()
        if (this.aceptarSoli) {
          this.fireStore.getByEmailConductor('conductores', this.aceptarSoli.idConductor).subscribe(
            (querySnapshot) => {
              this.conductor = querySnapshot.docs[0].data();
              this.conductor.id = querySnapshot.docs[0].id
              console.log(this.conductor.id)
              if (this.conductor.estado === true) {
                if (this.conductor.asientosDisponibles > 0 ) {

                const idsAceptados = JSON.parse(localStorage.getItem('idsAceptados')!) || [];
                idsAceptados.push(this.idPeticion);
                localStorage.setItem('idsAceptados', JSON.stringify(idsAceptados));
                console.log(idsAceptados)

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
                    estado: true,
                    meUbi: this.conductor.meUbi,
                    desUbi: this.conductor.desUbi,
                    asientosDisponibles: this.conductor.asientosDisponibles - 1
                  }
                  this.fireStore.updateDocumentConductor('conductores', this.conductor.id, this.conductorUpdate).then(() =>{
                    this.updateSolicitud = {
                      idConductor : this.datosSolicitud.idConductor,
                      IdUsuario : this.datosSolicitud.IdUsuario,
                      ubicacionUser : this.datosSolicitud.ubicacionUser,
                      estado : true
                    }
                    this.fireStore.updateDocumentSolicitud('solicitudes', this.idPeticion, this.updateSolicitud).then(() => {
                      this.router.navigate(['/esperando'])
                    })
                  })
                }else{
                  this.message("","Espacio insuficiente","Ya no queda espacio en tu vehiculo")
                }
              }else{
                this.message("","Estás desconectado","Debes conectarte para aceptar solicitudes")
              }
            }
          )
        }
      }
    )
  };
              
    
rechazarSolicitud(){

  this.fireStore.deleteSolicitud('solicitudes', this.idPeticion).then(() => {
    this.router.navigate(['/esperando'])
  })

}

handleRefresh(){
  
    this.ngOnInit();
  
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
