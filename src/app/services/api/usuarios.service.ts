import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsuario } from 'src/app/interfaces/Iusuario';
import { IUsuarios } from 'src/app/interfaces/Iusuarios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  apiURL = "https://jsonserver-x5h4.onrender.com";

  constructor(private httpClient: HttpClient) { }

  listaUsuarios(): Observable<IUsuarios>{
    return this.httpClient.get<IUsuarios>(`${this.apiURL}/usuarios`);
  }

  addUsuario(usuario: IUsuario): Observable<IUsuario> {
    return this.httpClient.post<IUsuario>(`${this.apiURL}/usuarios`, usuario);
  }

  getUsuario(id: Number): Observable<IUsuarios> {
    return this.httpClient.get<IUsuarios>(`${this.apiURL}/usuarios/?id=${id}`);
  }

  updateUsuario(usuario: any): Observable<IUsuarios> {
    return this.httpClient.put<IUsuarios>(`${this.apiURL}/usuarios/${usuario.id}`, usuario);
  }

  deleteUsuario(usuario: any): Observable<IUsuarios> {
    return this.httpClient.delete<IUsuarios>(`${this.apiURL}/usuarios/${usuario.id}`);
  }
}
