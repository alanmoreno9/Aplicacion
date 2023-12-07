import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatospagoPageRoutingModule } from './datospago-routing.module';

import { DatospagoPage } from './datospago.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    DatospagoPageRoutingModule
  ],
  declarations: [DatospagoPage]
})
export class DatospagoPageModule {}
