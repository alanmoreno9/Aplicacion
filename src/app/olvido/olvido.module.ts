import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OlvidoPageRoutingModule } from './olvido-routing.module';

import { OlvidoPage } from './olvido.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    OlvidoPageRoutingModule,
    TranslateModule
  ],
  declarations: [OlvidoPage]
})
export class OlvidoPageModule {}
