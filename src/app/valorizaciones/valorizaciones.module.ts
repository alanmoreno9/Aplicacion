import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValorizacionesPageRoutingModule } from './valorizaciones-routing.module';

import { ValorizacionesPage } from './valorizaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValorizacionesPageRoutingModule
  ],
  declarations: [ValorizacionesPage]
})
export class ValorizacionesPageModule {}
