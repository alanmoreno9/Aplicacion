import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-userencamino',
  templateUrl: './userencamino.page.html',
  styleUrls: ['./userencamino.page.scss'],
})
export class UserencaminoPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    setTimeout( ()=>{
      this.router.navigate(['lector'])
    },5000)
  }
}
