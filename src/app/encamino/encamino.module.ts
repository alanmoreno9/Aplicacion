import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EncaminoPageRoutingModule } from './encamino-routing.module';

import { EncaminoPage } from './encamino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EncaminoPageRoutingModule
  ],
  declarations: [EncaminoPage]
})
export class EncaminoPageModule {}
