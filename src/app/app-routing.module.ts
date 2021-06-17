import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'listadeusuarios',
    loadChildren: () => import('./listadeusuarios/listadeusuarios.module').then( m => m.ListadeusuariosPageModule)
  },
  {
    path: 'perfil/:id',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'lugares',
    loadChildren: () => import('./lugares/lugares.module').then( m => m.LugaresPageModule)
  },
  {
    path: 'infolugares/:id',
    loadChildren: () => import('./infolugares/infolugares.module').then( m => m.InfolugaresPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
