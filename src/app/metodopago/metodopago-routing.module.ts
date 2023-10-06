import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MetodopagoPage } from './metodopago.page';

const routes: Routes = [
  {
    path: '',
    component: MetodopagoPage
  },
  {
    path: 'debito',
    loadChildren: () => import('./debito/debito.module').then( m => m.DebitoPageModule)
  },
  {
    path: 'credito',
    loadChildren: () => import('./credito/credito.module').then( m => m.CreditoPageModule)
  },
  {
    path: 'otro',
    loadChildren: () => import('./otro/otro.module').then( m => m.OtroPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MetodopagoPageRoutingModule {}
