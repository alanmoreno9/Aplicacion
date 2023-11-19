import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoadingoffPageRoutingModule } from './loadingoff-routing.module';

import { LoadingoffPage } from './loadingoff.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoadingoffPageRoutingModule,
    TranslateModule
  ],
  declarations: [LoadingoffPage]
})
export class LoadingoffPageModule {}
