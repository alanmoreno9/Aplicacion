import { Component, OnInit } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';
import { ScannerService } from '../services/scanner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {
  allowedFormats: BarcodeFormat[] = [BarcodeFormat.QR_CODE];

  constructor(private scannerService: ScannerService,
    private router: Router,) { }

  ngOnInit() {
  }

  /*onCodeResult(resultString: string) {
    console.log('Resultado del escaneo:', resultString);
     this.router.navigate(['/home', { result: resultString }]);
  }
  */
}
