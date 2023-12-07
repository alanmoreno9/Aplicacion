import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsperandoPageRoutingModule } from './esperando-routing.module';

import { EsperandoPage } from './esperando.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EsperandoPageRoutingModule,
    TranslateModule
  ],
  declarations: [EsperandoPage]
})
export class EsperandoPageModule {}
