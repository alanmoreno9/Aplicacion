import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RutaresumenPageRoutingModule } from './rutaresumen-routing.module';

import { RutaresumenPage } from './rutaresumen.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RutaresumenPageRoutingModule,
    TranslateModule
  ],
  declarations: [RutaresumenPage]
})
export class RutaresumenPageModule {}
