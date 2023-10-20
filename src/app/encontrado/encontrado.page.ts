import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConductoresService } from '../services/api/conductores.service';



@Component({
  selector: 'app-encontrado',
  templateUrl: './encontrado.page.html',
  styleUrls: ['./encontrado.page.scss'],
})
export class EncontradoPage implements OnInit {

  idConductor: any; 
  datosConductor: any; 
  nombreCompleto: any;
  telefonoConductor: any; 
  patenteConductor: any;
  marcaYModelo: any;
  idPeticion: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private conductoresService: ConductoresService,
  ) { }

  ngOnInit() {
    this.idConductor = this.activatedRoute.snapshot.paramMap.get("id");
    this.idPeticion = this.activatedRoute.snapshot.paramMap.get("idpeticion");
    console.log(this.idConductor)

    this.conductoresService.getConductor(Number(this.idConductor)).subscribe(data =>{
      
      this.datosConductor = data
      
      this.nombreCompleto = this.datosConductor[0].nombre + " " + this.datosConductor[0].apellido;
      this.telefonoConductor = this.datosConductor[0].telefono;
      this.patenteConductor = this.datosConductor[0].placa;
      this.marcaYModelo = this.datosConductor[0].marca + " " + this.datosConductor[0].modelo
    });
    
  }

}
