import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadingoffPage } from './loadingoff.page';

const routes: Routes = [
  {
    path: '',
    component: LoadingoffPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoadingoffPageRoutingModule {}
