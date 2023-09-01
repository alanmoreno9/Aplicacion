import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'home', icon: 'home' },
    { title: 'Modo Conductor', url: 'ingresaconductor', icon: 'car' },
    { title: 'Cerrar Sesión', url: 'loadingoff', icon: 'power' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}

  usuario:any;
  
  
  

  ngOnInit() {

 
  }
  ionViewWillLoad(){
    
  }

  
} 
