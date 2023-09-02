import { Component, Input, NgZone, ViewChild } from '@angular/core';
import {Platform,MenuController, NavController} from '@ionic/angular';
import { DataProvider } from './home/providers/data.provider';

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
  constructor(private ngZone: NgZone, public dataProvider: DataProvider) {}

  
  usuario:any;
  nUsuario:string="";
  playing:boolean = true;
  
  
  

  ngOnInit() {
    //localStorage.clear();
    //localStorage.removeItem('usuario');
    //this.changePlaying();
    //this.usuario=JSON.parse("");
    //this.usuario2 = JSON.parse(localStorage.getItem('usuario.nombre')!);
 
  }
 /* ionViewWillLoad(){
    //this.changePlaying();
    this.changePlaying();
    //this.nUsuario="test";
  }//*/
  /*ionNavWillChange(){
    //this.nUsuario="test";
    this.changePlaying();

  }//*/

  /*ionNavDidChange(){
    this.nUsuario="test";
  }//*/

  ionViewWillEnter() {
    //this.getProfile();
    //this.changePlaying();
    //this.nUsuario="test";
  }

  ionViewDidLoad()
  {
    //this.getProfile();
    //this.changePlaying();
    //this.nUsuario="test";
  }

  /*changePlaying() {
    this.ngZone.run(() => {
      this.usuario = JSON.parse(localStorage.getItem('usuario')!);
      this.nUsuario = this.usuario.nombre;
      console.log('---->'+this.usuario.nombre);
    });
    
  }//*/

  /*changePlaying() {
    this.ngZone.run(() => {
      this.playing = true;
    });
  }//*/

  /*getProfile() {
    this.apis.getMyProfile(localStorage.getItem('uid')).then((data: any) => {
      console.log('userdata', data);
      if (data) {
        this.ngZone.run(() => {
          this.username = data.fullname;
          this.userno = data.phone;
        });
        
      }
    }).catch(error => {
      console.log(error);
    });
  }//*/

  
} 
