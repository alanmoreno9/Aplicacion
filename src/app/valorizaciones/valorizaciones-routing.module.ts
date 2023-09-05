import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValorizacionesPage } from './valorizaciones.page';

const routes: Routes = [
  {
    path: '',
    component: ValorizacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValorizacionesPageRoutingModule {}
