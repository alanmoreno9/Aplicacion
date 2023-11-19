import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validator,
  FormBuilder,
  Validators
} from '@angular/forms'
import { ToastController } from '@ionic/angular';
import { FirestoreService } from '../services/firebase/firestore.service';
import { AuthService } from '../services/firebase/auth.service';

@Component({
  selector: 'app-registrouser',
  templateUrl: './registrouser.page.html',
  styleUrls: ['./registrouser.page.scss'],
})
export class RegistrouserPage implements OnInit {

  FormRegisterUser: FormGroup;

  constructor(
    public fb: FormBuilder,
    private toastController: ToastController,
    private fireStore: FirestoreService,
    private auth: AuthService
  ) {
    this.FormRegisterUser = this.fb.group({
      'nombre' : new FormControl("", Validators.required),
      'apellido' : new FormControl("",Validators.required),
      'correo': new FormControl("",Validators.required),
      'contraseña': new FormControl("", [Validators.required, Validators.minLength(6)])
    })
   }

  ngOnInit() {
  }

  registrar(){
    const f = this.FormRegisterUser.value;

    if (this.FormRegisterUser.valid) {
      const user = {
        apellido: f.apellido,
        contraseña: f.contraseña,
        correo: f.correo,
        id: this.generateUniqueId(),
        nombre: f.nombre
      }
      this.fireStore.createDocument('usuarios', user).then(
        ()=>{
        this.auth.registro(f.correo, f.contraseña)
        },
        error => {
          console.error("No se pudo registrar al usuario: ", error)
        })
    }else{

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

  generateUniqueId() {
    return Date.now() + Math.floor(Math.random() * 1000);
  }
}
