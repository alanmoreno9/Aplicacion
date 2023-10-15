import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMetodopago } from 'src/app/interfaces/Imetodopago';
import { MetodopagoService } from 'src/app/services/api/metodopago.service';

@Component({
  selector: 'app-credito',
  templateUrl: './credito.page.html',
  styleUrls: ['./credito.page.scss'],
})
export class CreditoPage implements OnInit {
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
