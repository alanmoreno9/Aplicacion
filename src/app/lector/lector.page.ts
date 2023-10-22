import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lector',
  templateUrl: './lector.page.html',
  styleUrls: ['./lector.page.scss'],
})
export class LectorPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout( ()=>{
      this.router.navigate(['valorizaciones'])
  },10000)
}
}