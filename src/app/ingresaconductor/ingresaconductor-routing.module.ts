import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresaconductorPage } from './ingresaconductor.page';

const routes: Routes = [
  {
    path: '',
    component: IngresaconductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresaconductorPageRoutingModule {}
