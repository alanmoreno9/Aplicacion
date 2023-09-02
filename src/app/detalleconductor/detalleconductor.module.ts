import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleconductorPageRoutingModule } from './detalleconductor-routing.module';

import { DetalleconductorPage } from './detalleconductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleconductorPageRoutingModule
  ],
  declarations: [DetalleconductorPage]
})
export class DetalleconductorPageModule {}
