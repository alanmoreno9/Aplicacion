import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MenuController, ToastController } from '@ionic/angular';
import {
  FormGroup,
  FormControl,
  Validator,
  FormBuilder,
  Validators
} from '@angular/forms'


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuarios: any[] = [];

  formularioLogin: FormGroup;

  constructor(
    private router: Router, 
    private menu: MenuController, 
    public fb: FormBuilder,
    private toastController: ToastController,
    private httpClient : HttpClient
    ) { 
    
      this.formularioLogin = this.fb.group({
      'nombre' : new FormControl("", Validators.required),
      'password' : new FormControl("", [Validators.required, Validators.minLength(6)])
    })
  }

  ngOnInit() {
    this.menu.enable(false);
    this.httpClient.get<any>("https://jsonserver-x5h4.onrender.com/usuarios").subscribe(resultado => {
    this.usuarios = resultado
    console.log(this.usuarios);
    });
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

    

    if (this.formularioLogin.valid) {
    const f = this.formularioLogin.value;

    this.httpClient.get<any[]>("https://jsonserver-x5h4.onrender.com/usuarios").subscribe((usuarios: any[]) => {
      const usuarioEncontrado = usuarios.find((usuario) => usuario.correo === f.nombre && usuario.contraseña === f.password);

      if (usuarioEncontrado) {
        this.message("Hola " + usuarioEncontrado.nombre + " " + usuarioEncontrado.apellido + " En un momento te redirigiremos")
        
        setTimeout(() =>{
          this.router.navigate(['home']);
        }, 2000);

        if (localStorage.getItem('usuario')) {
          localStorage.removeItem('usuario');
        }

        localStorage.setItem('usuario',JSON.stringify(usuarioEncontrado));
      } else {
        this.message("El correo o la contraseña no coinciden")
      }
    });

    }else{
      this.message("Formulario inválido")
    }
  };
  
  register(){
    this.router.navigate(['register']);
  }

  olvido(){
    this.router.navigate(['olvido'])
  }
}
