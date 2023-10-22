import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { CompartidoService } from 'src/app/services/compartido.service';

@Component({
  selector: 'app-peticiones',
  templateUrl: './peticiones.component.html',
  styleUrls: ['./peticiones.component.scss'],
})
export class PeticionesComponent  implements OnInit {
  
  @Input() nombre!: any;
  @Input() apellido!: any;

  constructor(
    private router: Router,
    private modalController: ModalController,
    private navCtrl: NavController,
    private sharedService: CompartidoService
  ) { }

  ngOnInit() {}

  esperando(){
    this.sharedService.closeAndNavigateToEsperado();
  }
}
