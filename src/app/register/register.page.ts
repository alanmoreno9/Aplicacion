import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

import {
  FormGroup,
  FormControl,
  Validator,
  FormBuilder,
  Validators
} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(
    private UsuariosService: UsuariosService,
    private router: Router,
    private toastController: ToastController,
    public fb: FormBuilder
  ) { 
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'apellido': new FormControl("", Validators.required),
      'correo': new FormControl("", Validators.required),
      'contraseña': new FormControl("", Validators.required)
    })
  }

  ngOnInit() {
  }
  //Mensaje en pantalla

  login(){
    this.router.navigate(['login'])
  }

  async mensajerrorregister(mensaje: string){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'bottom'
    });
    toast.present()
  }

  guardar(){
    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      this.mensajerrorregister('Debes llenar todos los campos')
    }else{
      this.mensajerrorregister('Registro exitoso, en unos momentos te redirigimos')
      var usuario = {
        nombre: f.nombre,
        apellido: f.apellido,
        correo: f.correo,
        contraseña: f.contraseña
      };
      localStorage.removeItem('usuario');
      
      localStorage.setItem('usuario',JSON.stringify(usuario));
      setTimeout(() =>{
        this.router.navigate(['login']);
      }, 2000);
    };

    

    
  }

  //Mensaje en pantalla 
  


  
}
