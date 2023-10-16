import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet, MenuController, ToastController } from '@ionic/angular';
import {
  FormGroup,
  FormControl,
  Validator,
  FormBuilder,
  Validators
} from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-ingresaconductor',
  templateUrl: './ingresaconductor.page.html',
  styleUrls: ['./ingresaconductor.page.scss'],
})
export class IngresaconductorPage implements OnInit {

  formLoginConductor: FormGroup;

  constructor(
    private router: Router, 
    private menu: MenuController,
    private routerOutlet: IonRouterOutlet,
    private toastController: ToastController,
    public fb: FormBuilder,
    private httpClient : HttpClient
     ) {
      this.formLoginConductor = this.fb.group({
        'correo' : new FormControl("", Validators.required),
        'contraseña' : new FormControl("", Validators.required)
      })
    }

  ngOnInit() {
    this.menu.enable(false);
    this.routerOutlet.swipeGesture = false;
  }

  async mensajerrorregister(mensaje: string){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'bottom'
    });
    toast.present()
  }

  async message(timerInterval: any){
    Swal.fire({
      title: 'Cargando Mapa',
      html: 'Esto tomara un par de segundos.',
      timer: 3000,
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
        }, 3000)
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

  login(){


    if (this.formLoginConductor.valid) {
    const f = this.formLoginConductor.value;

    this.httpClient.get<any[]>("https://jsonserver-x5h4.onrender.com/conductores").subscribe((conductores: any[]) => {
      const usuarioEncontrado = conductores.find((conductor) => conductor.correo === f.correo && conductor.contraseña === f.contraseña);

      if (usuarioEncontrado) {
        this.mensajerrorregister("Hola " + usuarioEncontrado.nombre + " " + usuarioEncontrado.apellido + " Gracias por llevar a nuestros compañeros")
        this.message('')
        setTimeout(() =>{
          this.router.navigate(['mapa']);
        }, 2000);
      } else {
        this.mensajerrorregister("El correo o la contraseña no coinciden")
      }
    });

    }else{
      this.mensajerrorregister("Formulario inválido")
    }
  };

  conductor(){
    this.router.navigate(['mapa'])
  }
  registerconductor(){
    this.router.navigate(['registerconductor'])
  }
}
