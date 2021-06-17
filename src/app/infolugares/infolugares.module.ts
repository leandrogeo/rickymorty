import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfolugaresPageRoutingModule } from './infolugares-routing.module';

import { InfolugaresPage } from './infolugares.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfolugaresPageRoutingModule
  ],
  declarations: [InfolugaresPage]
})
export class InfolugaresPageModule {}
