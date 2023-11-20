import { Component, ViewChild, OnInit } from '@angular/core';
import { ScannerService } from '../services/scanner.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

  constructor(private scannerService: ScannerService,
    private router: Router,) { }

  ngOnInit() {
  }

 
}
