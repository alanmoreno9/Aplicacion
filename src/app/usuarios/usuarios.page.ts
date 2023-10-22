import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TextorandomService } from '../services/api/textorandom.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})


export class UsuariosPage implements OnInit {

  usuarios: any[]=[];
  resenas: any[]=[];
 
  textoRandom: string = '';
  
  constructor(private httpClient : HttpClient, private textoRandomService: TextorandomService) { }

  ngOnInit() {
    this.httpClient.get<any>("https://randomuser.me/api/?results=20").subscribe(resultado => {
    console.log(resultado);
    this.usuarios = resultado.results
    });

    this.textoRandomService.generarLorem().subscribe(data =>{
      this.textoRandom = data[0];
    });
  }

}
