import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallemapconductorPage } from './detallemapconductor.page';

const routes: Routes = [
  {
    path: '',
    component: DetallemapconductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallemapconductorPageRoutingModule {}
