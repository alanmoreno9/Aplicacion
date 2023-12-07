import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirestoreService } from '../services/firebase/firestore.service';
import Swal from 'sweetalert2'
import { error } from 'console';


@Component({
  selector: 'app-encontrado',
  templateUrl: './encontrado.page.html',
  styleUrls: ['./encontrado.page.scss'],
})
export class EncontradoPage implements OnInit {

  idConductor: any; 
  datosConductor: any; 
  nombreCompleto: any;
  telefonoConductor: any; 
  patenteConductor: any;
  marcaYModelo: any;
  idPeticion: any;
  datosPeticion: any;
  datosUsuario: any;
  nombreUser: any;
  apellidoUser: any;
  cancelacionPeticions: any;
  soli: any; 
  llego: any; 

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fireStore: FirestoreService
  ) { }

  ngOnInit() {
    
    
  }
  ionViewDidEnter(){
    this.idConductor = this.activatedRoute.snapshot.paramMap.get("id");
      this.idPeticion = this.activatedRoute.snapshot.paramMap.get("idpeticion");

      this.fireStore.getByEmailConductor('conductores', this.idConductor).subscribe(
        (querySnapshot) => {
          this.datosConductor = querySnapshot.docs[0].data()

          this.nombreCompleto = this.datosConductor.nombre + " " + this.datosConductor.apellido;
          this.telefonoConductor = this.datosConductor.telefono;
          this.patenteConductor = this.datosConductor.placa;
          this.marcaYModelo = this.datosConductor.marca + " " + this.datosConductor.modelo;

        });

      this.fireStore.getByIdSolicitud('solicitudes', this.idPeticion).subscribe(
        (querySnapshot) => {
          this.datosPeticion = querySnapshot.data()
          if (this.datosPeticion) {
            this.fireStore.getByEmail('usuarios', this.datosPeticion.IdUsuario).subscribe(
              (querySnapshot) => {
                this.datosUsuario = querySnapshot.docs[0].data();
                this.nombreUser = this.datosUsuario.nombre;
                this.apellidoUser = this.datosUsuario.apellido;
              }
            )
          }else{
            console.log("La solicitud no existe")
          }
        }
      )
  }

  cancelarSolicitud(){

    this.fireStore.getByIdSolicitud('solicitudes', this.idPeticion).subscribe(
      (querySnapshot) => {
        this.soli = querySnapshot.data()
        if (this.soli) {
          if (this.soli.estado === false) {
            this.fireStore.deleteSolicitud('solicitudes', this.idPeticion)
            this.router.navigate(['/conductoresactivos'])
          }else{
            this.message("","No puedes cancelar","El conductor ya aceptó tu peticion")
          }
        }else{
          this.message("", "Ya fue cancelada", "tu solicitud fue rechazada por el conductor, te redirigiremos");
          this.router.navigate(['/conductoresactivos'])
        }
      },
      error => {
        console.error("error al recuperar dato: ",error)
      }
    )
  }

  llegoAccion(){
    this.fireStore.getByIdSolicitud('solicitudes', this.idPeticion).subscribe(
      (querySnapshot) => {
        this.llego = querySnapshot.data()
        if (this.llego) {
          if (this.llego.estado === true) {
            this.router.navigate(['/esperarconductor'])
          }else{
            this.message("", "El conductor no ha aceptado tu solicitud", "tu solicitud fue enviada al conductor, por favor, espera.");
          }
        }else{
          this.message("", "El conductor no ha llegado", "tu solicitud fue rechazada por el conductor, te redirigiremos");
          this.router.navigate(['/conductoresactivos'])
        }
      },
      error => {
        console.error("error al recuperar dato: ",error)
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
