import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loadinguser',
  templateUrl: './loadinguser.page.html',
  styleUrls: ['./loadinguser.page.scss'],
})
export class LoadinguserPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() =>{
      this.router.navigate(['home']);
    }, 2000);
  }

}
