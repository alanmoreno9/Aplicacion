import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RutaresumenPage } from './rutaresumen.page';

const routes: Routes = [
  {
    path: '',
    component: RutaresumenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RutaresumenPageRoutingModule {}
