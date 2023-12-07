import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EncontradoPageRoutingModule } from './encontrado-routing.module';

import { EncontradoPage } from './encontrado.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EncontradoPageRoutingModule,
    TranslateModule
  ],
  declarations: [EncontradoPage]
})
export class EncontradoPageModule {}
