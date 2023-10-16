import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMetodopago } from 'src/app/interfaces/Imetodopago';
import { MetodopagoService } from 'src/app/services/api/metodopago.service';

@Component({
  selector: 'app-debito',
  templateUrl: './debito.page.html',
  styleUrls: ['./debito.page.scss'],
})
export class DebitoPage implements OnInit {

  tarjeta: IMetodopago = {
    tipotarjeta: 'vista',
    numero: 1234_1234_1234_1234,
    fechavencimiento: '06/27',
    cvv: 123
  }

  tarjetas:any[]=[];

  constructor(private apiServices: MetodopagoService, private router: Router ) { }

  ngOnInit() {
  }

  addMetodo(){
    this.apiServices.addMetodo(this.tarjeta).subscribe()
    this.router.navigate(['/mistarjetas'])
  }

}
