import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfolugaresPage } from './infolugares.page';

const routes: Routes = [
  {
    path: '',
    component: InfolugaresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfolugaresPageRoutingModule {}
