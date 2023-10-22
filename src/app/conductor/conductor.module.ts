import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConductorPageRoutingModule } from './conductor-routing.module';

import { ConductorPage } from './conductor.page';

import { PeticionesComponent } from '../components/peticiones/peticiones.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConductorPageRoutingModule
  ],
  declarations: [ConductorPage, PeticionesComponent]
})
export class ConductorPageModule {}
