import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagoqrPageRoutingModule } from './pagoqr-routing.module';

import { PagoqrPage } from './pagoqr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagoqrPageRoutingModule
  ],
  declarations: [PagoqrPage]
})
export class PagoqrPageModule {}
