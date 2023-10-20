import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConductoresService } from '../services/api/conductores.service';
import { SolicitudesService } from '../services/api/solicitudes.service';
import { UsuariosService } from '../services/api/usuarios.service';
import Swal from 'sweetalert2'


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

  constructor(
    private activatedRoute: ActivatedRoute,
    private conductoresService: ConductoresService,
    private solicitudesService: SolicitudesService,
    private usuariosService: UsuariosService,
    private router: Router
  ) { }

  ngOnInit() {
    this.idConductor = this.activatedRoute.snapshot.paramMap.get("id");
    this.idPeticion = this.activatedRoute.snapshot.paramMap.get("idpeticion");
    console.log(this.idConductor)

    this.conductoresService.getConductor(Number(this.idConductor)).subscribe(data =>{
      
      this.datosConductor = data
      
      this.nombreCompleto = this.datosConductor[0].nombre + " " + this.datosConductor[0].apellido;
      this.telefonoConductor = this.datosConductor[0].telefono;
      this.patenteConductor = this.datosConductor[0].placa;
      this.marcaYModelo = this.datosConductor[0].marca + " " + this.datosConductor[0].modelo
    });

    this.solicitudesService.getSolicitud(Number(this.idPeticion)).subscribe(data =>{
      this.datosPeticion = data;
      console.log(this.datosPeticion);
      this.usuariosService.getUsuario(Number(this.datosPeticion[0].IdUsuario)).subscribe(data =>{
        this.datosUsuario = data;
        console.log(this.datosUsuario);
        this.nombreUser = this.datosUsuario[0].nombre;
        this.apellidoUser = this.datosUsuario[0].apellido;

      });
    });
    
  }

  cancelarSolicitud(){
    if (this.datosPeticion[0].estado === false) {
      this.solicitudesService.deleteSolicitud(this.datosPeticion[0]).subscribe(data =>{
        console.log("eliminado")
        this.router.navigate(['/conductoresactivos'])
      })
      
    }else{
      this.message("","No puedes cancelar","El conductor ya aceptó tu peticion")
    }

  }

  llegó(){
    
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
