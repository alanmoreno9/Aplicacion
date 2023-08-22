import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterconductorPage } from './registerconductor.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterconductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterconductorPageRoutingModule {}
