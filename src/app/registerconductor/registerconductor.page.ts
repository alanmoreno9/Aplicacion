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
import { HttpClient } from '@angular/common/http';
import { IConductor } from '../interfaces/Iconductor';
import { FirestoreService } from '../services/firebase/firestore.service';

@Component({
  selector: 'app-registerconductor',
  templateUrl: './registerconductor.page.html',
  styleUrls: ['./registerconductor.page.scss'],
})
export class RegisterconductorPage implements OnInit {

  FormRegisterConductor: FormGroup;
  datosApi: any[] = [];

  constructor(
    private router: Router,
    private toastController: ToastController,
    public fb: FormBuilder,
    private fireStore: FirestoreService
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
      if (f.telefono > 99999999  && f.telefono <= 999999999 ) {
        if (f.marca.length >= 2) {
          if (f.modelo.length >= 3) {
            if (f.año > 2000 && f.año < 2025) {
              if (f.placa.length === 7) {
                if (f.rut.length === 8 || f.rut.length === 9) {
                  var conductor: IConductor = {
                    nombre : local.nombre,
                    apellido : local.apellido,
                    correo : local.correo,
                    contraseña : local.contraseña,
                    telefono : f.telefono,
                    marca : f.marca,
                    modelo : f.modelo,
                    año : f.año,
                    placa : f.placa,
                    rut : f.rut,
                    estado: false,
                    meUbi: null,
                    desUbi: null,
                    asientosDisponibles: 4
                  };

                  this.fireStore.getByEmailConductor('conductores', local.correo).subscribe(
                    (querySnapshot) => {
          
                      const documentos = querySnapshot.docs;

                      if (documentos.length === 1) {
                        this.mensajerrorregister("Conductor ya registrado, inicia sesión para continuar")
                        setTimeout(() =>{
                          this.router.navigate(['ingresaconductor']);
                        }, 2000);
                      }else{
                        this.mensajerrorregister("Registro exitoso, en un momento te redirigiremos. Para iniciar sesión como conductor, debes usar tus credenciales")
                  
                        setTimeout(() =>{
                          this.router.navigate(['ingresaconductor']);
                        }, 2000);
                        this.fireStore.createDocumentConductor('conductores', conductor);
                      }
                    }
                    
                      
                    
                  );


                  

                }else{
                  this.mensajerrorregister("Rut inválido")
                }
              }else{
                this.mensajerrorregister("Placa inválida")
              }
            }else{
              this.mensajerrorregister("Año de vehiculo inválido")
            }
          }else{
            this.mensajerrorregister("Modelo inválido")
          }
        }else{
          this.mensajerrorregister("Marca inválida")
        }
      }else{
        this.mensajerrorregister("Número de telefono debe contener 9 digitos")
      }

      
      
      

      
    }
  }

}
