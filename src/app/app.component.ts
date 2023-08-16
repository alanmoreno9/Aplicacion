import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'home', icon: 'home' },
    { title: '', url: '', icon: 'paper-plane' },
    { title: 'Equipos', url: '/folder/favorites', icon: 'heart' },
    { title: 'Estadisticas', url: '/folder/archived', icon: 'archive' },
    { title: 'Campeon', url: '/folder/trash', icon: 'trash' },
    { title: 'Fichaje', url: '/folder/spam', icon: 'warning' },
    { title: 'Iniciar Sesión', url: 'login', icon: 'log-in' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
} 
