import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeticiondetallePageRoutingModule } from './peticiondetalle-routing.module';

import { PeticiondetallePage } from './peticiondetalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeticiondetallePageRoutingModule
  ],
  declarations: [PeticiondetallePage]
})
export class PeticiondetallePageModule {}
