import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsperarconductorPageRoutingModule } from './esperarconductor-routing.module';

import { EsperarconductorPage } from './esperarconductor.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EsperarconductorPageRoutingModule,
    TranslateModule
  ],
  declarations: [EsperarconductorPage]
})
export class EsperarconductorPageModule {}
