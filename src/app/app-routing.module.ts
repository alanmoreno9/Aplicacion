import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loading',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'loading',
    loadChildren: () => import('./loading/loading.module').then( m => m.LoadingPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'conductor',
    loadChildren: () => import('./conductor/conductor.module').then( m => m.ConductorPageModule)
  },
  {
    path: 'ingresaconductor',
    loadChildren: () => import('./ingresaconductor/ingresaconductor.module').then( m => m.IngresaconductorPageModule)
  },
  {
    path: 'registerconductor',
    loadChildren: () => import('./registerconductor/registerconductor.module').then( m => m.RegisterconductorPageModule)
  },
  {
    path: 'config',
    loadChildren: () => import('./config/config.module').then( m => m.ConfigPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'loadingoff',
    loadChildren: () => import('./loadingoff/loadingoff.module').then( m => m.LoadingoffPageModule)
  },
  {
    path: 'buscando',
    loadChildren: () => import('./buscando/buscando.module').then( m => m.BuscandoPageModule)
  },
  {
    path: 'encontrado',
    loadChildren: () => import('./encontrado/encontrado.module').then( m => m.EncontradoPageModule)
  },
  {
    path: 'olvido',
    loadChildren: () => import('./olvido/olvido.module').then( m => m.OlvidoPageModule)
  },
  {
    path: 'restablecer',
    loadChildren: () => import('./restablecer/restablecer.module').then( m => m.RestablecerPageModule)
  },
  {
    path: 'detalleconductor/:nombre/:apellido',
    loadChildren: () => import('./detalleconductor/detalleconductor.module').then( m => m.DetalleconductorPageModule)
  },
  {
    path: 'esperando',
    loadChildren: () => import('./esperando/esperando.module').then( m => m.EsperandoPageModule),
    data: { noCache: true },
  },
  {
    path: 'encamino',
    loadChildren: () => import('./encamino/encamino.module').then( m => m.EncaminoPageModule)
  },
  {
    path: 'qr',
    loadChildren: () => import('./qr/qr.module').then( m => m.QrPageModule)
  },
  {
    path: 'esperarconductor',
    loadChildren: () => import('./esperarconductor/esperarconductor.module').then( m => m.EsperarconductorPageModule)
  },
  {
    path: 'lector',
    loadChildren: () => import('./lector/lector.module').then( m => m.LectorPageModule)
  },
  {
    path: 'userencamino',
    loadChildren: () => import('./userencamino/userencamino.module').then( m => m.UserencaminoPageModule)
  },
  {
    path: 'valorizaciones',
    loadChildren: () => import('./valorizaciones/valorizaciones.module').then( m => m.ValorizacionesPageModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  },
  {
    path: 'apiadd',
    loadChildren: () => import('./api/add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'apidelete/:id',
    loadChildren: () => import('./api/delete/delete.module').then( m => m.DeletePageModule)
  },
  {
    path: 'apidetail/:id',
    loadChildren: () => import('./api/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'apihome',
    loadChildren: () => import('./api/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'apilist',
    loadChildren: () => import('./api/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'apiupdate/:id',
    loadChildren: () => import('./api/update/update.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'conductoresactivos',
    loadChildren: () => import('./conductoresactivos/conductoresactivos.module').then( m => m.ConductoresactivosPageModule)
  },
  {
    path: 'valorizacionconductor',
    loadChildren: () => import('./valorizacionconductor/valorizacionconductor.module').then( m => m.ValorizacionconductorPageModule)
  },
  {
    path: 'solicitudesconductor',
    loadChildren: () => import('./solicitudesconductor/solicitudesconductor.module').then( m => m.SolicitudesconductorPageModule)
  },
  {
    path: 'pagoqr',
    loadChildren: () => import('./pagoqr/pagoqr.module').then( m => m.PagoqrPageModule)
  },
  {
    path: 'solicitudes',
    loadChildren: () => import('./solicitudes/solicitudes.module').then( m => m.SolicitudesPageModule)
  },
  {
    path: 'detallemapconductor/:id',
    loadChildren: () => import('./detallemapconductor/detallemapconductor.module').then( m => m.DetallemapconductorPageModule)
  },
  {
    path: 'loadinguser',
    loadChildren: () => import('./loadinguser/loadinguser.module').then( m => m.LoadinguserPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
