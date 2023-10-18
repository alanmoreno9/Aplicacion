import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallemapconductorPageRoutingModule } from './detallemapconductor-routing.module';

import { DetallemapconductorPage } from './detallemapconductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallemapconductorPageRoutingModule
  ],
  declarations: [DetallemapconductorPage]
})
export class DetallemapconductorPageModule {}
