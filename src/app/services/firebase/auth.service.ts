import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FirestoreService } from './firestore.service';
import { IUsuario } from 'src/app/interfaces/Iusuario';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  constructor(
    private auth: AngularFireAuth, 
    private router: Router,
    private route: ActivatedRoute,
    private toastController: ToastController,
    private fireStore: FirestoreService
    ) {
      
    }
    

  async login(email : string, pass : string){
    try {
      const user = await this.auth.signInWithEmailAndPassword(email, pass);
      
      if (user) {   
        console.log(user);
        
        this.fireStore.getByEmail('usuarios', email).subscribe(
          (querySnapshot) => {

            const documentos = querySnapshot.docs;
            const datosUser = documentos[0].data()

            
            this.guardarLocal(datosUser.nombre, datosUser.apellido, datosUser.correo, datosUser.contraseña).then(() => {
              this.router.navigate(['/home'])  
            });

          }
        );
       
        
      }else{
        console.log("No inicio sesión")
      }
    } catch {
        this.message('Contraseña incorrecta. Inténtelo de nuevo.');
    }
  }

  async register(email:string, pass: string){
    try {
      const user = await this.auth.createUserWithEmailAndPassword(email, pass);
      this.cerrar()
      console.log(user)
    } catch(error) {
      console.error("Error al iniciar sesion: ", error);
    }
  }
  async registro(email:string, pass: string){
    try {
      const user = await this.auth.createUserWithEmailAndPassword(email, pass);
      console.log(user)
    } catch(error) {
      console.error("Error al iniciar sesion: ", error);
    }
  }


  logout(){
    try {
      this.auth.signOut();
      this.router.navigate(['loadingoff']);                                          
    } catch (error) {
      console.error("error al cerrar sesion", error);
    }
  }

  async guardarLocal(nombre: String, apellido: String, correo: String, contraseña: String){
    try {
      const userLocal: IUsuario = {
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        contraseña: contraseña
      }
      if (localStorage.getItem('usuario')) {
        localStorage.removeItem('usuario');
      }
      localStorage.setItem('usuario',JSON.stringify(userLocal));

    } catch (error) {
      console.error(error)
    }
    

  }

  cerrar(){
      this.auth.signOut();                                  
  }

  checkAuth(){
    return new Promise((resolve,reject) => {
      this.auth.onAuthStateChanged((user) => {
        resolve(user);
        if (user) {
          const email = user.email
          this.fireStore.getByEmail('usuarios', email!).subscribe(
            (querySnapshot) => {
  
              const documentos = querySnapshot.docs;
              const datosUser = documentos[0].data()
  
              
              this.guardarLocal(datosUser.nombre, datosUser.apellido, datosUser.correo, datosUser.contraseña).then(() => {
                this.router.navigate(['/home'])  
              });
  
            }
          );
        }
        
      }, (error) => {
        reject(error);
      });
    });
  }

  resetPassword(email: string): Promise<void>{
    return this.auth.sendPasswordResetEmail(email)
  }

  async message(mensaje: string){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'bottom'
    });
    toast.present()
  }
  
  
  


}
