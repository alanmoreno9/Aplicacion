import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { IUsuario, pago } from 'src/app/interfaces/Iusuario';
import { AlertController } from '@ionic/angular';
import * as QRCode from 'qrcode';

import 'angularx-qrcode';
@Component({
  selector: 'app-pagoqr',
  templateUrl: './pagoqr.page.html',
  styleUrls: ['./pagoqr.page.scss'],
})
export class PagoqrPage implements OnInit {

  @ViewChild('qrcode', { static: true }) qrcode!: ElementRef;
  
  codigoQR: string = '';
  
  constructor(private firestore: AngularFirestore,
    private router: Router,
    private alertController: AlertController) { }

  ngOnInit(): void{
    const paginaARedirigir = '/qr';

    QRCode.toCanvas(this.qrcode.nativeElement, paginaARedirigir, function (error) {
      if (error) {
        console.error(error);
      }
    });
  }

  redirigir() {
    this.router.navigate(['/home']);
  }

  generarCodigoQR() {
    this.codigoQR = '/qr';
    console.log('Código QR generado:', this.codigoQR);
  }

}
  


