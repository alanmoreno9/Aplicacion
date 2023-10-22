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

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {


  formularioCambio: FormGroup;

  constructor(
    private router: Router,
    private toastController: ToastController,
    public fb: FormBuilder
  ) { 
    this.formularioCambio = this.fb.group({
      'contraseña': new FormControl("", Validators.required),
      'confirmcontraseña': new FormControl("", Validators.required)
    })
  }

  ngOnInit() {
  }

  async mensajeToast(mensaje: string){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'bottom'
    });
    toast.present()
  }

  guardar(){
    var f = this.formularioCambio.value;

    

    if (this.formularioCambio.valid) {
      if (f.contraseña == f.confirmcontraseña) {
        var local = JSON.parse(localStorage.getItem('usuario')!);

        var usuario = {
          nombre : local.nombre,
          apellido : local.apellido,
          correo : local.correo,
          contraseña : f.confirmcontraseña
        }
        localStorage.setItem("usuario", JSON.stringify(usuario));
        console.log('cambio')
        console.log(localStorage.getItem('usuario'));
        this.mensajeToast('Redireccionando')
        setTimeout(() =>{
          this.router.navigate(['login']);
        }, 2000);
      }else{
        console.log(localStorage.getItem('usuario'));
        this.mensajeToast('Contraseñas no coinciden');
        console.log('no cambio')
      }
    }else{
      this.mensajeToast('Campos inválidos')
    }
    
  }

}
