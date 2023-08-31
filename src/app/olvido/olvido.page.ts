import { Component, OnInit } from '@angular/core';
import { MenuController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validator,
  FormBuilder,
  Validators
} from '@angular/forms';


@Component({
  selector: 'app-olvido',
  templateUrl: './olvido.page.html',
  styleUrls: ['./olvido.page.scss'],
})
export class OlvidoPage implements OnInit {

  olvido: FormGroup;

  constructor(
    private router: Router, 
    private menu: MenuController, 
    public fb: FormBuilder,
    private toastController: ToastController
  ) { 

    this.olvido = this.fb.group({
      'email' : new FormControl("", Validators.required),
    })

  }

  ngOnInit() {
    
  }

  async message(mensaje: string){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'bottom'
    });
    toast.present()
  }

  verificar(){
    var f = this.olvido.value;

    var usuario = JSON.parse(localStorage.getItem('usuario')!);

    if(usuario.correo == f.email){
      this.message('Redireccionando')
      setTimeout(() =>{
        this.router.navigate(['restablecer']);
      }, 2000);
    }else{
      this.message('Éste correo no existe')
    }
  }

}
