import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMetodopago } from 'src/app/interfaces/Imetodopago';
import { MetodopagoService } from 'src/app/services/api/metodopago.service';

@Component({
  selector: 'app-otro',
  templateUrl: './otro.page.html',
  styleUrls: ['./otro.page.scss'],
})
export class OtroPage implements OnInit {
  tarjeta: IMetodopago = {
    tipotarjeta: 'vista',
    numero: 1234_1234_1234_1234,
    fechavencimiento: '06/27',
    cvv: 123
  }

  constructor(private apiServices: MetodopagoService, private router: Router) { }

  ngOnInit() {
  }

  addMetodo(){
    this.apiServices.addMetodo(this.tarjeta).subscribe()
    this.router.navigate(['/mistarjetas'])
  }

}
