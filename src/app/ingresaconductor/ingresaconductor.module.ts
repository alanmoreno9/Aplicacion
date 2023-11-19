import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresaconductorPageRoutingModule } from './ingresaconductor-routing.module';

import { IngresaconductorPage } from './ingresaconductor.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    IngresaconductorPageRoutingModule,
    TranslateModule
  ],
  declarations: [IngresaconductorPage]
})
export class IngresaconductorPageModule {}
