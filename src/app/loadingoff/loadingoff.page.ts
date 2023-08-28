import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loadingoff',
  templateUrl: './loadingoff.page.html',
  styleUrls: ['./loadingoff.page.scss'],
})
export class LoadingoffPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() =>{
      this.router.navigate(['login']);
    }, 2000);
  }

}
