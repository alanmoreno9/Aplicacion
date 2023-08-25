import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EncontradoPage } from './encontrado.page';

const routes: Routes = [
  {
    path: '',
    component: EncontradoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EncontradoPageRoutingModule {}
