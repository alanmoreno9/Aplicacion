import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'home', icon: 'home' },
    { title: 'Home', url: 'register', icon: 'paper-plane' },
    { title: 'Equipos', url: '/folder/favorites', icon: 'heart' },
    { title: 'Estadisticas', url: '/folder/archived', icon: 'archive' },
    { title: 'Campeon', url: '/folder/trash', icon: 'trash' },
    { title: 'Fichaje', url: '/folder/spam', icon: 'warning' },
    { title: 'Modo Conductor', url: 'ingresaconductor', icon: 'car' },
    { title: 'Cerrar Sesión', url: 'loadingoff', icon: 'power' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}

  usuario:any;
  

  ngOnInit() {

    
    this.usuario = JSON.parse(localStorage.getItem("usuario")!)
    
    
  }
  ionViewWillLoad(){
    
  }

  
} 
