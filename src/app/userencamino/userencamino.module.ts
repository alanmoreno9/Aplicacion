import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserencaminoPageRoutingModule } from './userencamino-routing.module';

import { UserencaminoPage } from './userencamino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserencaminoPageRoutingModule
  ],
  declarations: [UserencaminoPage]
})
export class UserencaminoPageModule {}
