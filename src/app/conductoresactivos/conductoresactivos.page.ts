import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conductoresactivos',
  templateUrl: './conductoresactivos.page.html',
  styleUrls: ['./conductoresactivos.page.scss'],
})
export class ConductoresactivosPage implements OnInit {

  conductores: any[] = [];
  conductoresActivos: any[] = [];

  constructor(
    private httpClient : HttpClient
  ) { }

  ngOnInit() {
    this.httpClient.get<any>("https://jsonserver-x5h4.onrender.com/conductores").subscribe(resultado => {
    this.conductores = resultado
    console.log(this.conductores);
    });
  }

}
