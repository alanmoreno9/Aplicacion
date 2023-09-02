import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalleconductor',
  templateUrl: './detalleconductor.page.html',
  styleUrls: ['./detalleconductor.page.scss'],
})
export class DetalleconductorPage implements OnInit {

  nombre: any;
  apellido: any;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.nombre = this.activatedRoute.snapshot.paramMap.get("nombre");
    this.apellido = this.activatedRoute.snapshot.paramMap.get("apellido");
    console.log("nombre", this.nombre);
    console.log("apellido", this.apellido);
  }

}
