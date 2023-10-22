import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresaconductorPageRoutingModule } from './ingresaconductor-routing.module';

import { IngresaconductorPage } from './ingresaconductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    IngresaconductorPageRoutingModule
  ],
  declarations: [IngresaconductorPage]
})
export class IngresaconductorPageModule {}
