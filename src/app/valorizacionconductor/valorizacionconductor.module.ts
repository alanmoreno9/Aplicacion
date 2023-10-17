import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValorizacionconductorPageRoutingModule } from './valorizacionconductor-routing.module';

import { ValorizacionconductorPage } from './valorizacionconductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValorizacionconductorPageRoutingModule
  ],
  declarations: [ValorizacionconductorPage]
})
export class ValorizacionconductorPageModule {}
