import { Component, OnInit } from '@angular/core';
import { SolicitudesService } from '../services/api/solicitudes.service';
import { UsuariosService } from '../services/api/usuarios.service';
import Swal from 'sweetalert2'
import { ConductoresService } from '../services/api/conductores.service';
import { Router } from '@angular/router';

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
  constructor(
    private solicitudesService: SolicitudesService,
    private usuarioService: UsuariosService,
    private conductoresService: ConductoresService,
    private router: Router, 
  ) { }

  ngOnInit() {
    
    
   
  }
  ionViewDidEnter(){
    this.conductor = JSON.parse(localStorage.getItem('conductor')!);
    this.solicitudesService.getSolicitudPorConductor(this.conductor.id).subscribe(
      (data) => {
        this.resultado = data;
        this.peticiones = this.resultado.filter((solicitud: any) => solicitud.estado === false)
        
          this.usuarioService.getUsuario(this.peticiones.IdUsuario).subscribe(
            (data) => {
              this.usuario = data
            },
            (error) =>{
      
              console.error("Error al obtener usuario")
            }        
          );
      },
      (error) => {
        console.error("Error al obtener peticiones", error);
      }
    );
    console.log(this.peticiones)
    console.log(this.usuario)
  }

  iniciarViaje(){
    this.conductoresService.getConductor(this.conductor.id).subscribe(data =>{
      this.conductorGet = data
      if (this.conductorGet[0].asientosDisponibles === 4) {
        this.message("","Error", "Debes aceptar almenos una peticion")
      }else{
        this.router.navigate(['/rutaresumen'])
      }
    })
    
    
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
