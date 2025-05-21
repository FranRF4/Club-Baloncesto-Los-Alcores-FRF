import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EquipoPage } from './equipo.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { EquipoPageRoutingModule } from './equipo-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    EquipoPageRoutingModule
  ],
  declarations: [EquipoPage]
})
export class EquipoPageModule {}
