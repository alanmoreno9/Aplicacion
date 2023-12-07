import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatospagoPage } from './datospago.page';

const routes: Routes = [
  {
    path: '',
    component: DatospagoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatospagoPageRoutingModule {}
