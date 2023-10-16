import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'home', icon: 'home' },
    { title: 'Modo Conductor', url: 'ingresaconductor', icon: 'car' },
    { title: 'reseñas', url: 'usuarios', icon: 'star' },
    { title: 'API', url: 'apihome', icon: 'people' },
    { title: 'Cerrar Sesión', url: 'loadingoff', icon: 'power' },
    
  ];

  public apiMenu = [
    { title: 'Home', url: 'apihome', icon: 'home' },
    { title: 'List', url: 'apilist', icon: 'people-circle' },
    { title: 'Salir', url: 'home', icon: 'log-out' },
  ];

  public menuMapa = [
    { title: 'Cerrar Sesion', url: 'login', icon: 'log-out' },
  ];
  
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(
    private router: Router,
    private menuController: MenuController
  ) {}

  usuario:any;

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuario')!);
  }
  ionViewWillLoad(){
    
  }

  mostrarMenu() {
    return this.router.url !== '/login'; 
    return this.router.url == '/home';
    // NO SE VA A MOSTRAR EN EL LOGIN
  }

  mostrarMenuApi() {
    const aux = ['apihome','apiadd','apilist','apidelete','apiupdate','apidetail']
    return aux.includes(this.router.url.substring(1)); // ELIMINAMOS EL "/"
    //return this.router.url == '/apihome';
  }

  mostrarMenuMapa(){
    const aux = ['mapa']
    return aux.includes(this.router.url.substring(1));
    return this.router.url !== '/login';
  }
  
} 
