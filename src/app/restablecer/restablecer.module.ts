import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestablecerPageRoutingModule } from './restablecer-routing.module';

import { RestablecerPage } from './restablecer.page';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RestablecerPageRoutingModule,
    TranslateModule
  ],
  declarations: [RestablecerPage]
})
export class RestablecerPageModule {}
