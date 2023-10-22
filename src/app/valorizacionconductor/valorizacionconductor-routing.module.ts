import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValorizacionconductorPage } from './valorizacionconductor.page';

const routes: Routes = [
  {
    path: '',
    component: ValorizacionconductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValorizacionconductorPageRoutingModule {}
