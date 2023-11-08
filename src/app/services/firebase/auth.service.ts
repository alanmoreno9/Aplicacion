import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  async login(email : string, pass : string){
    try {
      const user = await this.auth.signInWithEmailAndPassword(email, pass);
      console.log(user);
      if (user) {
        //redirigir
      }
    } catch (error) {
      console.error("Error en login", error);
    }
  }

  async register(email:string, pass: string){
    try {
      const user = await this.auth.createUserWithEmailAndPassword(email,pass);
      this.auth.signInWithEmailAndPassword(email,pass);
      console.log(user);
    } catch (error) {
      console.error("error al registrarse", error);
    }
  }

  async logout(){
    try {
      await this.auth.signOut();
      //redireccionar al login                                          
    } catch (error) {
      console.error("error al cerrar sesion", error);
    }
  }

  checkAuth(){
    return new Promise((resolve,reject) => {
      this.auth.onAuthStateChanged((user) => {
        resolve(user);
      }, (error) => {
        reject(error);
      });
    });
  }


}
