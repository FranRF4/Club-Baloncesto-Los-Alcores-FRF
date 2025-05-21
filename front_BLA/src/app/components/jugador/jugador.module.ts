import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JugadorPage } from './jugador.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { JugadorPageRoutingModule } from './jugador-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    JugadorPageRoutingModule
  ],
  declarations: [JugadorPage]
})
export class JugadorPageModule {}
