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
import { AuthService } from '../services/firebase/auth.service'; 

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
    private toastController: ToastController,
    private auth: AuthService
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

    if (this.olvido.valid) {
      const reset = this.auth.resetPassword(f.email)

      console.log(reset)
    }else{
      this.message("Formulario invalido")
    }
    
  }

}
