import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IUsuario } from 'src/app/interfaces/Iusuario';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }


  getCollection(nombreColeccion: string){
    return this.firestore.collection(nombreColeccion).valueChanges({ idField: 'id', correo: 'correo'});
  }

  createDocument(nombreColeccion:string, data: IUsuario){
    return this.firestore.collection<IUsuario>(nombreColeccion).add(data);
  }

  updateDocument(nombreColeccion:string, documentId: string, data: IUsuario){
    return this.firestore.collection<IUsuario>(nombreColeccion).doc(documentId).update(data);
  }

  deleteDocument(nombreColeccion:string, documentId: string){
    return this.firestore.collection<IUsuario>(nombreColeccion).doc(documentId).delete();
  }

  getById(nombreColeccion:string, documentId: string){
    return this.firestore.collection<IUsuario>(nombreColeccion).doc(documentId).valueChanges();
  }
  getByEmail(nombreColeccion: string, correo: string){
    return this.firestore.collection<IUsuario>(nombreColeccion, ref => ref.where("correo", "==", correo)).get();
  }
}
