import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoadinguserPageRoutingModule } from './loadinguser-routing.module';

import { LoadinguserPage } from './loadinguser.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoadinguserPageRoutingModule,
    TranslateModule
  ],
  declarations: [LoadinguserPage]
})
export class LoadinguserPageModule {}
