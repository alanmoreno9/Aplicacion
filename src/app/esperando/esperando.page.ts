import { Component, OnInit } from '@angular/core';
import { SolicitudesService } from '../services/api/solicitudes.service';
import { UsuariosService } from '../services/api/usuarios.service';
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
  constructor(
    private solicitudesService: SolicitudesService,
    private usuarioService: UsuariosService
  ) { }

  ngOnInit() {
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


  handleRefresh(event: any){
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();
    }, 1000);
  }
}
