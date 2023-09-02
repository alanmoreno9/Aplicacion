import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements OnInit {

  isModalOpen = false;

  constructor(private menu: MenuController,private routerOutlet: IonRouterOutlet) { }


  ngOnInit() {
    this.menu.enable(true);
    this.routerOutlet.swipeGesture = false;
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
