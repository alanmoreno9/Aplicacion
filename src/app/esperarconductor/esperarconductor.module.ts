import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsperarconductorPageRoutingModule } from './esperarconductor-routing.module';

import { EsperarconductorPage } from './esperarconductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EsperarconductorPageRoutingModule
  ],
  declarations: [EsperarconductorPage]
})
export class EsperarconductorPageModule {}
