import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { BarcodeScanner } from '@capacitor-community/barcode-scanner'

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnDestroy {
  scannedResult: any;
  content_visibility='';

  constructor(private router: Router) {}

  ngOnInit() {

  }

  ionViewDidEnter(){
    
  }

  async message(timerInterval: any){
    Swal.fire({
      title: 'El pago se realizo correctamente',
      html: 'Seras redirigido a la pagina de inicio',
      timer: 2000,
      heightAuto: false,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer()!.querySelector('b');
        timerInterval = setInterval(() => {
          const timerLeft = Swal.getTimerLeft();
          if (typeof timerLeft === 'number') {
            b!.textContent = timerLeft.toString();
          }
        }, 2000)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })
  }

  pagar(){
    this.message('')
    this.router.navigate(['/home'])
  }

  async checkPermission(){
    try {
      const status = await BarcodeScanner.checkPermission({force: true});

      if (status.granted) {
        return true
      }
      return false;
    } catch (error) {
      console.log(error)
      return false
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
      this.content_visibility = 'hidden'
      const result = await BarcodeScanner.startScan();
      console.log(result)
      BarcodeScanner.showBackground();
      document.querySelector('body')?.classList.remove('scanner-active');
      this.content_visibility = ''
      if (result?.hasContent) {
        this.scannedResult = result.content;
        this.router.navigate([this.scannedResult])
      }
    } catch (error) {
      console.log(error)
      this.stopScan();
    }
  }

  stopScan(){
    
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
    document.querySelector('body')?.classList.remove('scanner-active');
    this.content_visibility= ''

  }

  ngOnDestroy(): void {
    this.stopScan();
  }


}