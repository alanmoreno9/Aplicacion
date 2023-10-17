import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagoqrPage } from './pagoqr.page';

const routes: Routes = [
  {
    path: '',
    component: PagoqrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagoqrPageRoutingModule {}
