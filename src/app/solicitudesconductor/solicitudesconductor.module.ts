import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitudesconductorPageRoutingModule } from './solicitudesconductor-routing.module';

import { SolicitudesconductorPage } from './solicitudesconductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitudesconductorPageRoutingModule
  ],
  declarations: [SolicitudesconductorPage]
})
export class SolicitudesconductorPageModule {}
