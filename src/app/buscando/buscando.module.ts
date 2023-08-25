import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscandoPageRoutingModule } from './buscando-routing.module';

import { BuscandoPage } from './buscando.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscandoPageRoutingModule
  ],
  declarations: [BuscandoPage]
})
export class BuscandoPageModule {}
