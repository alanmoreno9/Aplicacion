import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {
  scannedResult: any;
  content_visibility='';

  constructor(private router: Router) { 
    
  }

  ngOnInit() {
  }


}