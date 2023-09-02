import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ToastController } from '@ionic/angular';
import {
  FormGroup,
  FormControl,
  Validator,
  FormBuilder,
  Validators
} from '@angular/forms';
import { DataProvider } from '../home/providers/data.provider';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;
  //dataProvider: DataProvider = new DataProvider;

  constructor(
    private router: Router, 
    private menu: MenuController, 
    public fb: FormBuilder,
    private toastController: ToastController,
    public dataProvider: DataProvider
    ) { 
    
      this.formularioLogin = this.fb.group({
      'nombre' : new FormControl("", Validators.required),
      'password' : new FormControl("", Validators.required)
    })
  }

  ngOnInit() {
    this.menu.enable(false);
  }

  async message(mensaje: string){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'bottom'
    });
    toast.present()
  }

  login(){
    var f = this.formularioLogin.value;

    var usuario = JSON.parse(localStorage.getItem('usuario')!);
    console.log('1---->'+usuario.nombre)
    this.dataProvider.userData = usuario;
    console.log('2---->'+this.dataProvider.userData.nombre)
    if(usuario.correo == f.nombre && usuario.contraseña == f.password){
      console.log('si está')
      this.message('En un momento te redireccionaremos')
      setTimeout(() =>{
        this.router.navigate(['home']);
      }, 2000);
      console.log(localStorage.getItem('usuario'));
    }else{
      console.log('no está')
      this.message('Credenciales Inválidas')
    }
  }

  register(){
    this.router.navigate(['register']);
  }

  olvido(){
    this.router.navigate(['olvido'])
  }
}
