import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firebase/firestore.service';

@Component({
  selector: 'app-conductoresactivos',
  templateUrl: './conductoresactivos.page.html',
  styleUrls: ['./conductoresactivos.page.scss'],
})
export class ConductoresactivosPage implements OnInit {

  conductores: any[] = [];
  conductoresActivos: any[] = [];
  usuarioActivo: any;

  constructor(
    private fireStore: FirestoreService
  ) { }

  ngOnInit() {
    this.fireStore.getByStatusConductor('conductores', true).subscribe(
      (querySnapshot) => {
        this.conductoresActivos = querySnapshot.docs.map( doc => doc.data());
        console.log(this.conductoresActivos)
      }
    )
     
    this.usuarioActivo = JSON.parse(localStorage.getItem("usuario")!)
  }

  handleRefresh(event: any){
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();
    }, 1000);
  }
}
