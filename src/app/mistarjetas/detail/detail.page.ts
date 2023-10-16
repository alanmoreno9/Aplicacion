import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MetodopagoService } from 'src/app/services/api/metodopago.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  tarjeta = {
    id: 0,
    tipotarjeta: 'vista',
    numero: 1111111111111111,
    fechavencimiento: '07/27',
    cvv: 323
  }

  constructor(private apiService: MetodopagoService,
              private router: Router) { }

  ngOnInit() {
    this.getTarjeta(this.getId())
  }

  ionViewWillEnter(){
    this.getTarjeta(this.getId())
  }

  getId(){
    let url = this.router.url
    let aux = url.split("/", 3)
    let id = parseInt(aux[2])
    return id
  }

  getTarjeta(id: Number){
    this.apiService.getTarjeta(id).subscribe((resp:any) => {
      this.tarjeta = {
        id: resp[0].id,
        tipotarjeta: resp[0].tipotarjeta,
        numero: resp[0].numero,
        fechavencimiento: resp[0].fechavencimiento,
        cvv: resp[0].cvv
      }
    })
  }

  deleteTarjeta(){
    this.apiService.deleteMetodo(this.tarjeta).subscribe();
    this.router.navigate(['/mistarjetas'])
  }



}
