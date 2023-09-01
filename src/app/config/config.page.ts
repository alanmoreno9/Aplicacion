import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {

  usuario: any;
  
  constructor() { }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem("usuario") || "")
  }

  entregar(){
       
    this.usuario = JSON.parse(localStorage.getItem("usuario")!)
    
    
  }
}
