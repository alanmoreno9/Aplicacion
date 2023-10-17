import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitudesconductorPage } from './solicitudesconductor.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitudesconductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitudesconductorPageRoutingModule {}
