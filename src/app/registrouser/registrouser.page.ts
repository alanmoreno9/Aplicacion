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
import { Router } from '@angular/router';

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
    private auth: AuthService,
    private router: Router
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
        correo: f.correo.toLowerCase(),
        id: this.generateUniqueId(),
        nombre: f.nombre
      }

      console.log(user)
      
      this.fireStore.getByEmail('usuarios', user.correo).subscribe(
        (querySnapshot) => {
          const documentos = querySnapshot.docs;
          console.log(documentos)
          if (documentos.length > 0) {
            this.message("Correo ya registrado")
          }else{
            this.fireStore.createDocument('usuarios', user).then(
              ()=>{
              this.auth.registro(f.correo, f.contraseña).then(() => {
                this.message("Registro exitoso")
                this.router.navigate(['/login'])
              })
              },
              error => {
                this.message("No se pudo registrar al usuario: ")
              })
          }
        },
        (error) => {
          this.message("Error al registrar, por favor intentalo más tarde")
        }
      )
      
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

  generateUniqueId() {
    return Date.now() + Math.floor(Math.random() * 1000);
  }
}
