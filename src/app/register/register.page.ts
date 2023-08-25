import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private UsuariosService: UsuariosService,
    private router: Router,
    private toastController: ToastController
  ) { }

  ngOnInit() {
  }
  //Mensaje en pantalla 
  async mensajeToast(mensaje: string){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'bottom'
    });
    toast.present()
  }

  addUsuario(nombre: any, apellido: any, correo: any, numero: any, contraseña: any){
    this.UsuariosService.addUsuario(nombre.value, apellido.value, correo.value,numero.value,contraseña.value);
    this.mensajeToast("Usuario creado correctamente")
    this.router.navigate(['home'])
  };
  
}
