import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscandoPageRoutingModule } from './buscando-routing.module';

import { BuscandoPage } from './buscando.page';

import { CardComponent } from '../components/card/card.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscandoPageRoutingModule
  ],
  declarations: [BuscandoPage, CardComponent]
})
export class BuscandoPageModule {}
