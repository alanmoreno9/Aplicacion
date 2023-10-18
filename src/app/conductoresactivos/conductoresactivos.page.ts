import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Isolicitud } from '../interfaces/isolicitud';

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
    private httpClient : HttpClient
  ) { }

  ngOnInit() {
    this.httpClient.get<any>("https://jsonserver-x5h4.onrender.com/conductores").subscribe(resultado => {
    this.conductores = resultado
    console.log(this.conductores);
    this.conductoresActivos = this.conductores.filter(conductor => conductor.estado === true)
    });
    this.usuarioActivo = JSON.parse(localStorage.getItem("usuario")!)
  }

  handleRefresh(event: any){
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();
    }, 1000);
  }
}
