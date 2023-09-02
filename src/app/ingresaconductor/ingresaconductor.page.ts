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
    public fb: FormBuilder
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

  login(){
    var f = this.formLoginConductor.value;

    var conductor = JSON.parse(localStorage.getItem('conductor')!);

    if (conductor.correo == f.correo && conductor.contraseña == f.contraseña) {
      this.mensajerrorregister('En un momento te redireccionaremos')
      setTimeout(() =>{
        this.router.navigate(['conductor']);
      }, 2000);
      console.log(localStorage.getItem('conductor'));
      console.log(localStorage.getItem('usuario'));
    }else{
      this.mensajerrorregister('Usuario no es conductor o credenciales inválidas')
    }
  }

  conductor(){
    this.router.navigate(['conductor'])
  }
  registerconductor(){
    this.router.navigate(['registerconductor'])
  }
}
