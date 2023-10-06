import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DebitoPageRoutingModule } from './debito-routing.module';

import { DebitoPage } from './debito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DebitoPageRoutingModule
  ],
  declarations: [DebitoPage]
})
export class DebitoPageModule {}
