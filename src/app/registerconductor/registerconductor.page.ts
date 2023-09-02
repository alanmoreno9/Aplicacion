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
  selector: 'app-registerconductor',
  templateUrl: './registerconductor.page.html',
  styleUrls: ['./registerconductor.page.scss'],
})
export class RegisterconductorPage implements OnInit {

  FormRegisterConductor: FormGroup;

  constructor(
    private router: Router,
    private toastController: ToastController,
    public fb: FormBuilder
  ) { 
    this.FormRegisterConductor = this.fb.group({
      'telefono' : new FormControl("", Validators.required),
      'marca' : new FormControl("",Validators.required),
      'modelo': new FormControl("",Validators.required),
      'año': new FormControl("",Validators.required),
      'placa': new FormControl("",Validators.required),
      'rut':new FormControl("",Validators.required),     
    })
  }

  ngOnInit() {
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
    var f = this.FormRegisterConductor.value;

    var local = JSON.parse(localStorage.getItem('usuario')!);

    if (this.FormRegisterConductor.invalid) {
      this.mensajerrorregister('Debes llenar todos los campos')
    }else{
      this.mensajerrorregister('Registro Exitoso, Te redireccionaremos')
      var conductor = {
        nombre : local.nombre,
        apellido : local.apellido,
        correo : local.correo,
        contraseña : local.contraseña,
        telefono : f.telefono,
        marca : f.marca,
        modelo : f.modelo,
        año : f.año,
        placa : f.placa,
        rut : f.rut
      }
      localStorage.setItem("conductor", JSON.stringify(conductor))
      console.log(localStorage.getItem('conductor'));
      setTimeout(() =>{
        this.router.navigate(['ingresaconductor']);
      }, 2000);
    }
  }

}
