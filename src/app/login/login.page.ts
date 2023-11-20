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
import { AuthService } from '../services/firebase/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { FirestoreService } from '../services/firebase/firestore.service'; 
import { LenguageService } from '../services/lenguage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  langs : string[] = [];
  idioma!: string;

  constructor(
    private router: Router, 
    private menu: MenuController, 
    public fb: FormBuilder,
    private toastController: ToastController,
    private httpClient : HttpClient,
    private authService :AuthService,
    private transService: TranslateService,
    private http: HttpClient,
    private fireStore: FirestoreService
    ) { 
      
      this.langs = this.transService.getLangs();

      this.formularioLogin = this.fb.group({
      'nombre' : new FormControl("", Validators.required),
      'password' : new FormControl("", [Validators.required, Validators.minLength(6)])
    })
  }
  getRandomUserData() {
    return this.http.get('https://randomuser.me/api/?results=10');
  }

  generateAndUploadUserData() {
    this.getRandomUserData().subscribe((randomUserData: any) => {
      randomUserData.results.forEach((user: any) => {
        const transformedUser = this.transformRandomUserData(user);
        this.fireStore.createDocument('usuarios', transformedUser).then(() => {
          try {
            this.authService.register(transformedUser.correo, transformedUser.contraseña).then(() => {
              this.router.navigate(['terms-modal'])
            }); 
          } catch (error) {
            console.log("Error: ", error)
          }

        });
        
      });
    });
  }

  transformRandomUserData(user: any) {
    const nombre = user.name.first;
    const apellido = user.name.last;
    let contraseña = (user.name.first.slice(0,3) + "." + user.name.last.slice(0,3)); // Genera la contraseña
    contraseña = contraseña.toLowerCase(); // Convierte la contraseña a minúsculas
  
    return {
      id: this.generateUniqueId(),
      nombre,
      apellido,
      correo: user.email,
      contraseña
    };
  }

  generateUniqueId() {
    return Date.now() + Math.floor(Math.random() * 1000);
  }

  ngOnInit() {
    this.menu.enable(false);
    this.authService.checkAuth()
    .then((user) => {
      if(user) {
        this.router.navigate(['home']);
      }
    })
    .catch((error) => {
      //console.error('Error en la autenticació:',error);
    })
  }

  

  ionViewDidEnter(){
    
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
      this.authService.login(f.nombre, f.password);
    }else{
      this.message("Formulario inválido")
    }

  };
}
