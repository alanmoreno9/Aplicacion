import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validator,
  FormBuilder,
  Validators
} from '@angular/forms'
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  constructor(
    private router: Router, 
    private menu: MenuController, 
    public fb: FormBuilder,
    private toastController: ToastController
  ) { 
    
  }
  
  ngOnInit() {
  }


}
