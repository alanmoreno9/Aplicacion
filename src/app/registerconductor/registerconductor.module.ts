import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterconductorPageRoutingModule } from './registerconductor-routing.module';

import { RegisterconductorPage } from './registerconductor.page';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RegisterconductorPageRoutingModule,
    BrowserModule
  ],
  declarations: [RegisterconductorPage]
})
export class RegisterconductorPageModule {}
