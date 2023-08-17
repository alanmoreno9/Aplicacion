import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private menu: MenuController, private routerOutlet: IonRouterOutlet) { }

  ngOnInit() {
    this.menu.enable(true);
    this.routerOutlet.swipeGesture = false;
  }

}
