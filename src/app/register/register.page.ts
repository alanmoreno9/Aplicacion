import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

import {
  FormGroup,
  FormControl,
  Validator,
  FormBuilder,
  Validators
} from '@angular/forms'
import { IUsuario } from '../interfaces/Iusuario';
import { UsuariosService } from 'src/app/services/api/usuarios.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  
  datosApi: any[] = [];
  
  formularioRegistro: FormGroup;

  constructor(
    private router: Router,
    private toastController: ToastController,
    public fb: FormBuilder,
    private apiService: UsuariosService,
    private httpClient : HttpClient,
  ) { 
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'apellido': new FormControl("", Validators.required),
      'correo': new FormControl("", Validators.required),
      'contraseña': new FormControl("", [Validators.required, Validators.minLength(6)])
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
    const f = this.formularioRegistro.value;
    

    if(this.formularioRegistro.invalid){

      this.mensajerrorregister('Debes llenar todos los campos')

    }else{  
      var usuario: IUsuario= {
        nombre: f.nombre ,
        apellido: f.apellido,
        correo: f.correo,
        contraseña: f.contraseña
      };
      
      if (this.datosApi && this.datosApi.length > 0) {
        const correoEnUso = this.datosApi.some((dato: any) => dato.correo === usuario.correo);
        if (correoEnUso) {
          this.mensajerrorregister('El correo ya está en uso');
        }else{
          this.mensajerrorregister('Registro exitoso, en unos momentos te redirigimos')
          this.apiService.addUsuario(usuario).subscribe()
            setTimeout(() =>{
          this.router.navigate(['login']);
          }, 2000);
        }
      }
      
      

      
      
        
      
     
      

    };

    
    
  }
  

  //Mensaje en pantalla 
  


  
}
