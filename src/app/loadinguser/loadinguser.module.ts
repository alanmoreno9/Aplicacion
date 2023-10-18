import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoadinguserPageRoutingModule } from './loadinguser-routing.module';

import { LoadinguserPage } from './loadinguser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoadinguserPageRoutingModule
  ],
  declarations: [LoadinguserPage]
})
export class LoadinguserPageModule {}
