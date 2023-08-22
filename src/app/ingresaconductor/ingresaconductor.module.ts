import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresaconductorPageRoutingModule } from './ingresaconductor-routing.module';

import { IngresaconductorPage } from './ingresaconductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresaconductorPageRoutingModule
  ],
  declarations: [IngresaconductorPage]
})
export class IngresaconductorPageModule {}
