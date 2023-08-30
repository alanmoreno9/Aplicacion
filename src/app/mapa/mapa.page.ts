import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validator,
  FormBuilder,
  Validators
} from '@angular/forms'
import { Router } from '@angular/router';
import { MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  formularioir: FormGroup;
  
 

  @Input() mostrarboton: boolean = true;

  constructor(
    private router: Router, 
    private menu: MenuController, 
    public fb: FormBuilder,
    private toastController: ToastController
  ) { 
    this.formularioir = this.fb.group({
      'ir' : new FormControl("", Validators.required)
    })
  }
  
  ngOnInit() {
  }

}
