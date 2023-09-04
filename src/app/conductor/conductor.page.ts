import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet, MenuController, NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { CompartidoService } from '../services/compartido.service';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements OnInit {

  isModalOpen = false;

  constructor(
    private menu: MenuController,
    private routerOutlet: IonRouterOutlet,
    private modalController: ModalController,
    private sharedService: CompartidoService,
    private NavController: NavController,
    private navCtrl: NavController
    ) { }


  ngOnInit() {
    this.menu.enable(true);
    this.sharedService.closeModal$.subscribe(()=>{
      this.closeAndNavigateToEsperado();
    });
  }

  async closeAndNavigateToEsperado(){
    const modal = await this.modalController.getTop();
    if (modal) {
      await modal.dismiss();
    }

    this.navCtrl.navigateForward(['/esperando'])
  }

  

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  ionViewWillEnter() {
    this.isModalOpen = false;
  }
}
