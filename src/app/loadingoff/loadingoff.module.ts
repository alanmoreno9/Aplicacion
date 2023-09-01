import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoadingoffPageRoutingModule } from './loadingoff-routing.module';

import { LoadingoffPage } from './loadingoff.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoadingoffPageRoutingModule
  ],
  declarations: [LoadingoffPage]
})
export class LoadingoffPageModule {}
