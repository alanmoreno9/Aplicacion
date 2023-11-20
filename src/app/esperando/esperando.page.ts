import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { FirestoreService } from '../services/firebase/firestore.service';

@Component({
  selector: 'app-esperando',
  templateUrl: './esperando.page.html',
  styleUrls: ['./esperando.page.scss'],
})
export class EsperandoPage implements OnInit {

  conductor: any;
  peticiones: any | null = null;
  usuario: any;
  resultado: any;
  conductorGet: any;
  nombreUser: any;
  usuarios: any[] = [];
  idPeticion: any;
  constructor(
    private router: Router, 
    private fireStore: FirestoreService
  ) { }

  ngOnInit() {
    
  }


  ionViewDidEnter(){
    this.conductor = JSON.parse(localStorage.getItem('usuario')!);

    this.fireStore.getByIdConductorSolicitud('solicitudes', this.conductor.correo).subscribe(
      (querySnapshot) => {
        this.resultado = querySnapshot.docs.map( doc => doc.data());
        this.peticiones = this.resultado.filter((solicitud: any) => solicitud.estado === false)
        console.log(this.peticiones)
        this.peticiones.forEach((solicitud: any) => {
          solicitud.id = querySnapshot.docs[0].id
          this.fireStore.getByEmail('usuarios', solicitud.IdUsuario).subscribe(
            (querySnapshot) => {
              solicitud.usuario = querySnapshot.docs[0].data()
            }
          )
        });
        
      },
      (error) => {
        console.error("Error al obtener peticiones", error);
      }
    )

  }

  iniciarViaje(){
    this.fireStore.getByEmailConductor('conductores', this.conductor.correo).subscribe(
      (querySnapshot) =>{
        this.conductorGet = querySnapshot.docs[0].data()
        if (this.conductorGet.asientosDisponibles === 4) {
          this.message("","Error", "Debes aceptar almenos una peticion")
        }else{
          this.router.navigate(['/rutaresumen'])
        }
      }
    )
  }


  handleRefresh(event: any){
    setTimeout(() => {
      this.ionViewDidEnter();
      event.target.complete();
    }, 1000);
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
