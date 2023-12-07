import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrouserPageRoutingModule } from './registrouser-routing.module';

import { RegistrouserPage } from './registrouser.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RegistrouserPageRoutingModule,
    TranslateModule
  ],
  declarations: [RegistrouserPage]
})
export class RegistrouserPageModule {}
