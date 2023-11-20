import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IUsuario } from 'src/app/interfaces/Iusuario';
import { Observable } from 'rxjs';
import { IConductor } from 'src/app/interfaces/Iconductor';


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


  //fireStore conductor


  createDocumentConductor(nombreColeccion: string, data: IConductor){
    return this.firestore.collection<IConductor>(nombreColeccion).add(data);
  }

  getByIdConductor(nombreColeccion:string, documentId: string){
    return this.firestore.collection<IConductor>(nombreColeccion).doc(documentId).get();
  }

  getByEmailConductor(nombreColeccion: string, correo: string){
    return this.firestore.collection<IConductor>(nombreColeccion, ref => ref.where("correo", "==", correo)).get();
  }

  updateDocumentConductor(nombreColeccion: string, documentId:string, data: Partial<IConductor>){
    return this.firestore.collection<IConductor>(nombreColeccion).doc(documentId).update(data);
  }

  getByStatusConductor(nombreColeccion: string, estado: boolean){
    return this.firestore.collection<IConductor>(nombreColeccion, ref => ref.where("estado", "==", estado)).get();
  }
  
}
