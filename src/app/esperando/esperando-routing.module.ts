import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EsperandoPage } from './esperando.page';

const routes: Routes = [
  {
    path: '',
    component: EsperandoPage
  },
  {
    path: 'peticiondetalle/:id',
    loadChildren: () => import('./peticiondetalle/peticiondetalle.module').then( m => m.PeticiondetallePageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EsperandoPageRoutingModule {}
