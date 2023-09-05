import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EsperarconductorPage } from './esperarconductor.page';

const routes: Routes = [
  {
    path: '',
    component: EsperarconductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EsperarconductorPageRoutingModule {}
