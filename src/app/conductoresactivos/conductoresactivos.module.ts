import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConductoresactivosPageRoutingModule } from './conductoresactivos-routing.module';

import { ConductoresactivosPage } from './conductoresactivos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConductoresactivosPageRoutingModule
  ],
  declarations: [ConductoresactivosPage]
})
export class ConductoresactivosPageModule {}
