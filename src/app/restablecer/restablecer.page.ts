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
import { FirestoreService } from '../services/firebase/firestore.service';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {


  formularioCambio: FormGroup;
  user: any;

  constructor(
    private router: Router,
    private toastController: ToastController,
    public fb: FormBuilder,
    private firestore: FirestoreService
  ) { 
    this.formularioCambio = this.fb.group({
      'contraseña': new FormControl("", Validators.required)
    })
  }

  ngOnInit() {
  }

  async mensajeToast(mensaje: string){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'bottom'
    });
    toast.present()
  }

  guardar(){
    var f = this.formularioCambio.value;
    this.user = JSON.parse(localStorage.getItem('usuario')!);
    if (this.formularioCambio.valid) {
      this.firestore.getByEmailConductor('conductores', this.user.correo).subscribe(
        (querySnapshot) => {
          const documentos = querySnapshot.docs;
          if (documentos.length === 0) {
            this.mensajeToast("No existe el conductor")
          }else{
            const primerDocumento = documentos[0];
            if (primerDocumento) {
              const documentId = primerDocumento.id;
              
              this.firestore.getByIdConductor('conductores', documentId).subscribe(
                (documentSnapshot) => {
                  const conductor = documentSnapshot.data();
                  if (conductor) {
                    var conduAct  = {
                      apellido: conductor.apellido,
                      asientosDisponibles: conductor.asientosDisponibles,
                      año: conductor.año,
                      contraseña: f.contraseña,
                      correo: conductor.correo,
                      desUbi: conductor.desUbi,
                      estado: conductor.estado,
                      marca: conductor.marca,
                      meUbi: conductor.meUbi,
                      modelo: conductor.modelo,
                      nombre: conductor.nombre,
                      placa: conductor.placa,
                      rut: conductor.rut,
                      telefono: conductor.telefono       
                    }
                    this.firestore.updateDocumentConductor('conductores', documentId, conduAct).then(()=>{
                      this.mensajeToast("Contraseña Actualizada")
                      setTimeout(() =>{
                        this.router.navigate(['ingresaconductor']);
                      }, 3000);
                    })
                  }
                  
                }
              )
              
            }else{
              console.error("Primer documento no definido")
            }
          }
        }
      )
    }else{
      this.mensajeToast('Campos inválidos')
    }
    
  }

}
