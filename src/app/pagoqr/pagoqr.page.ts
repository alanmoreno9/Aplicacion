import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { IUsuario, pago } from 'src/app/interfaces/Iusuario';
import { AlertController } from '@ionic/angular';
import { ScannerService } from '../services/scanner.service';

import 'angularx-qrcode';
@Component({
  selector: 'app-pagoqr',
  templateUrl: './pagoqr.page.html',
  styleUrls: ['./pagoqr.page.scss'],
})
export class PagoqrPage implements OnInit {
  
  codigoQR: string = '';
  
  constructor(private firestore: AngularFirestore,
    private router: Router,
    private alertController: AlertController,
    private scannerService: ScannerService) { }

  ngOnInit(){
   
  }

  generarCodigoQR() {
    this.codigoQR = '/qr';
    console.log('Código QR generado:', this.codigoQR);
  }

  escanearCodigoQR() {
    this.scannerService.setQRCodeResult(this.codigoQR);
  }

}
  


