import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OlvidoPageRoutingModule } from './olvido-routing.module';

import { OlvidoPage } from './olvido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    OlvidoPageRoutingModule
  ],
  declarations: [OlvidoPage]
})
export class OlvidoPageModule {}
