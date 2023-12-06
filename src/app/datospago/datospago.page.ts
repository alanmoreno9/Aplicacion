import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-datospago',
  templateUrl: './datospago.page.html',
  styleUrls: ['./datospago.page.scss'],
})
export class DatospagoPage implements OnInit {

  formularioPago: FormGroup;

  constructor(
    public fb: FormBuilder,
    private toastController: ToastController,
    private router: Router
  ) {
    this.formularioPago = this.fb.group({
      'num' : new FormControl("", Validators.required),
      'fecha' : new FormControl("", Validators.required),
      'cvv' : new FormControl("", Validators.required)
    })
   }

  ngOnInit() {
  }

  pagar(){
    var f = this.formularioPago.value

    if (this.formularioPago.valid) {
      this.message("Pago realizado, serás redirigido a la pagina principal")
      setTimeout(() =>{
        this.router.navigate(['home']);
      }, 3000);
    }else{
      this.message("Formulario inválido")
    }
  }

  async message(mensaje: string){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'bottom'
    });
    toast.present()
  }

}
