import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet, MenuController, ToastController } from '@ionic/angular';
import {
  FormGroup,
  FormControl,
  Validator,
  FormBuilder,
  Validators
} from '@angular/forms'
import { FirestoreService } from '../services/firebase/firestore.service';


@Component({
  selector: 'app-ingresaconductor',
  templateUrl: './ingresaconductor.page.html',
  styleUrls: ['./ingresaconductor.page.scss'],
})
export class IngresaconductorPage implements OnInit {

  formLoginConductor: FormGroup;

  constructor(
    private router: Router, 
    private menu: MenuController,
    private routerOutlet: IonRouterOutlet,
    private toastController: ToastController,
    public fb: FormBuilder,
    private fireStore: FirestoreService
     ) {
      this.formLoginConductor = this.fb.group({
        'correo' : new FormControl("", Validators.required),
        'contraseña' : new FormControl("", Validators.required)
      })
    }

  ngOnInit() {
    this.menu.enable(false);
    this.routerOutlet.swipeGesture = false;
    console.log(localStorage)
  }

  async mensajerrorregister(mensaje: string){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'bottom'
    });
    toast.present()
  }

  

  login(){


    if (this.formLoginConductor.valid) {
    const f = this.formLoginConductor.value;

    this.fireStore.getByEmailConductor('conductores', f.correo).subscribe(
      (querySnapshot) => {

        const documentos = querySnapshot.docs;

        if (documentos.length === 1) {
          const datosUser = documentos[0].data()
          if (f.contraseña === datosUser.contraseña) {
            this.mensajerrorregister("Registro Exitoso")
            setTimeout(() =>{
              this.router.navigate(['mapa']);
            }, 2000);
          }else{
            this.mensajerrorregister("Contraseña incorrecta")
          }
        }else{
          this.mensajerrorregister("El correo no está registrado como conductor")
        }
      }
    );

    }else{
      this.mensajerrorregister("Formulario inválido")
    }
  };

  registerconductor(){
    this.router.navigate(['registerconductor'])
  }
}
