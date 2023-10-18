import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadinguserPage } from './loadinguser.page';

const routes: Routes = [
  {
    path: '',
    component: LoadinguserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoadinguserPageRoutingModule {}
