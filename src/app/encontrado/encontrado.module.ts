import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EncontradoPageRoutingModule } from './encontrado-routing.module';

import { EncontradoPage } from './encontrado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EncontradoPageRoutingModule
  ],
  declarations: [EncontradoPage]
})
export class EncontradoPageModule {}
