import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallemapconductorPageRoutingModule } from './detallemapconductor-routing.module';

import { DetallemapconductorPage } from './detallemapconductor.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallemapconductorPageRoutingModule,
    TranslateModule
  ],
  declarations: [DetallemapconductorPage]
})
export class DetallemapconductorPageModule {}
