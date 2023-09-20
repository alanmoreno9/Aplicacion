import { Injectable } from '@angular/core';
import { usuario } from '../modelos/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuarios : usuario[] = [
    {
      
    }
  ]
  constructor() { }
  //metodo que devuelve todos los usuarios
  getAll(){
    return [...this.usuarios]
  }
  //metodo que busca un usuario por id encontrado 
  getUsuario(id: string){
    return{
      ...this.usuarios.find(aux =>{
        return aux.id = id
      })
    }
   }
  // Metodo que agrega un usuario
  addUsuario(nombre : string, apellido : string, correo : string, numero : string, contraseña : string){
    this.usuarios.push({
      nombre, apellido, correo, numero, contraseña, id: this.usuarios.length + 1 + ""
    })
  }
  // Metodo que borra un usuario 
  deleteUsuario(id : string){
    this.usuarios = this.usuarios.filter(aux =>{
      return aux.id !== id
    })
  }

}

