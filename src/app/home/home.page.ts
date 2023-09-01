import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  usuario:any;

  constructor(private router: Router,private menu: MenuController, private routerOutlet: IonRouterOutlet) { 
    
  }

  ngOnInit() {
    this.menu.enable(true);
    this.routerOutlet.swipeGesture = false;
    this.usuario = JSON.parse(localStorage.getItem("usuario") || "")
  }
  ionViewWillLoad(){
    
    
  }

}
