import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConductoresactivosPageRoutingModule } from './conductoresactivos-routing.module';

import { ConductoresactivosPage } from './conductoresactivos.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConductoresactivosPageRoutingModule,
    TranslateModule
  ],
  declarations: [ConductoresactivosPage]
})
export class ConductoresactivosPageModule {}
