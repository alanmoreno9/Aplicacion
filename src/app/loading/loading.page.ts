import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FirestoreService } from '../services/firebase/firestore.service';
import { AuthService } from '../services/firebase/auth.service';


@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor(
    private router: Router, 
    private http: HttpClient,
    private fireService: FirestoreService,
    private authService: AuthService
    ) { }



 


  ngOnInit() {
    setTimeout(() =>{
      this.router.navigate(['terms-modal']);
    }, 3000);
  }
  

}
