import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscandoPage } from './buscando.page';

const routes: Routes = [
  {
    path: '',
    component: BuscandoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscandoPageRoutingModule {}
