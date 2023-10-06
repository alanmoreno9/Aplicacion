import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-metodopago',
  templateUrl: './metodopago.page.html',
  styleUrls: ['./metodopago.page.scss'],
})
export class MetodopagoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  debito(){
    this.router.navigate(['/metodopago/debito'])
  }

  credito(){
    this.router.navigate(['/metodopago/credito'])
  }

  otro(){
    this.router.navigate(['/metodopago/otro'])
  }

}
