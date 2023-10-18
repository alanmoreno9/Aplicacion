import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  usuarios: any[]=[];
  resenas: any[]=[];
  
  constructor(private httpClient : HttpClient) { }

  ngOnInit() {
    this.httpClient.get<any>("https://randomuser.me/api/?results=20").subscribe(resultado => {
    console.log(resultado);
    this.usuarios = resultado.results
    });

    this.httpClient.get<any>("https://api.app.outscraper.com/maps/reviews").subscribe(resultado => {
    console.log(resultado);
    this.resenas = resultado.reviews
    });
  }

}
