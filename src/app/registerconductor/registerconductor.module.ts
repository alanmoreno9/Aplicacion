import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterconductorPageRoutingModule } from './registerconductor-routing.module';

import { RegisterconductorPage } from './registerconductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterconductorPageRoutingModule
  ],
  declarations: [RegisterconductorPage]
})
export class RegisterconductorPageModule {}
