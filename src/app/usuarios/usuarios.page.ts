import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  usuarios: any[]=[];
  reseñas: any[]=[];
  constructor(private httpClient : HttpClient) { }

  ngOnInit() {
    this.httpClient.get<any>("https://randomuser.me/api/?results=20").subscribe(resultado => {
    console.log(resultado);
    this.usuarios = resultado.results
    });
  }

}
