import { Component, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';



@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnDestroy {
  scannedResult: any;
  content_visibility='';

  constructor(private router: Router) { 
    
  }

  ngOnInit() {
  }

  async checkPermission(){
    try {
      const status = await BarcodeScanner.checkPermission({force:true});
      if (status.granted) {
        return true;
      }
      return false;
    } catch (error) {
      return undefined;
    }
  }

  async startScan(){
    try {
      const permission = await this.checkPermission();
      if (!permission) {
        return;
      }
      await BarcodeScanner.hideBackground();
      document.querySelector('body')?.classList.add('scanner-active');
      this.content_visibility='hidden';
      const result = await BarcodeScanner.startScan();
      console.log(result);
      BarcodeScanner.showBackground()
      document.querySelector('body')?.classList.remove('scanner-active');
      this.content_visibility='';
      if (result?.hasContent) {
        this.scannedResult = result.content;
        console.log(this.scannedResult);
        this.router.navigate(['/home']);
      }
    } catch (error) {
      console.log(error);
      this.stopScan();
    }
  }

  stopScan(){
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan(); 
    document.querySelector('body')?.classList.remove('scanner-active');
    this.content_visibility='';
  }

  ngOnDestroy(): void {
    this.stopScan();
  }

}