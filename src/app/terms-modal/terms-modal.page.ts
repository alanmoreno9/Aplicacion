import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CheckboxCustomEvent } from '@ionic/angular';
import { Router } from '@angular/router';
import { MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-terms-modal',
  templateUrl: './terms-modal.page.html',
  styleUrls: ['./terms-modal.page.scss'],
})
export class TermsModalPage implements OnInit {

  termsAccepted: boolean = false;


  constructor(private modalController: ModalController, private router: Router, public menuCtrl: MenuController) {
    this.menuCtrl.enable(false);
   }




  onTermsChanged(event: any) {
    this.termsAccepted = event.detail.checked;
  }


  ngOnInit() {
    
  }

  close() {
    if (this.termsAccepted) {
      this.router.navigate(['/login']);
      this.modalController.dismiss();
    } else {
      console.log('Debes aceptar los términos y condiciones para cerrar este modal.');
    }

  }
}
