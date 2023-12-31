import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './services/firebase/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'home', icon: 'home' },
    { title: 'Modo Conductor', url: 'ingresaconductor', icon: 'car' },
    { title: 'Reseñas', url: 'usuarios', icon: 'star' },
  ];

  public menuMapa = [
    { title: 'Modo usuario', url: 'loadinguser', icon: 'people' },
  ];
  
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(
    private router: Router,
    private menuController: MenuController,
    private transService: TranslateService,
    private authService: AuthService
  
  ) {
    this.transService.setDefaultLang('es');
    this.transService.addLangs(['es', 'en', 'fr', 'ar']);
  }

  usuario:any;

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuario')!);
  }
  ionViewWillLoad(){
    
  }
  cerrar(){
    this.authService.logout()
  }

  mostrarMenu() {
    return this.router.url !== '/login'; 
    return this.router.url == '/home';
    // NO SE VA A MOSTRAR EN EL LOGIN
  }
  mostrarMenuMapa(){
    const aux = ['mapa']
    return aux.includes(this.router.url.substring(1));
    return this.router.url !== '/login';
  }


  
} 
