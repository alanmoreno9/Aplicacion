import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-ingresaconductor',
  templateUrl: './ingresaconductor.page.html',
  styleUrls: ['./ingresaconductor.page.scss'],
})
export class IngresaconductorPage implements OnInit {

  constructor(private router: Router, private menu: MenuController, private routerOutlet: IonRouterOutlet) { }

  ngOnInit() {
    this.menu.enable(false);
    this.routerOutlet.swipeGesture = false;
  }

  conductor(){
    this.router.navigate(['conductor'])
  }
  registerconductor(){
    this.router.navigate(['registerconductor'])
  }
}
