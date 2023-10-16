import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { IMetodopago } from 'src/app/interfaces/Imetodopago';
import { MetodopagoService } from 'src/app/services/api/metodopago.service';


@Component({
  selector: 'app-mistarjetas',
  templateUrl: './mistarjetas.page.html',
  styleUrls: ['./mistarjetas.page.scss'],
})
export class MistarjetasPage implements OnInit {
  listaTarjetas:any = [];

  constructor(private router:Router,
    private apiServices: MetodopagoService, private toastController: ToastController,
    private alertController:AlertController,
    private activatedRoute: ActivatedRoute,) { }

  ngOnInit() {
    this.listar()
  }

  ionViewWillEnter(){
    this.listar()
  }

  listar(){
    this.apiServices.listaMetodo().subscribe((resp) => {
      let aux = JSON.stringify(resp)
      this.listaTarjetas =  JSON.parse(aux)
    })
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      this.listar();
      event.target.complete();
    }, 2000);
  }

}
