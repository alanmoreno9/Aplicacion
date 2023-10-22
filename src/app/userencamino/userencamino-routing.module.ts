import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserencaminoPage } from './userencamino.page';

const routes: Routes = [
  {
    path: '',
    component: UserencaminoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserencaminoPageRoutingModule {}
