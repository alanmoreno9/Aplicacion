import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagoqrPageRoutingModule } from './pagoqr-routing.module';

import { PagoqrPage } from './pagoqr.page';

import { QRCodeModule } from 'angularx-qrcode';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagoqrPageRoutingModule,
    QRCodeModule,
    TranslateModule
  ],
  declarations: [PagoqrPage]
})
export class PagoqrPageModule {}
