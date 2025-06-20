import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EquipoPage } from './equipo.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { EquipoPageRoutingModule } from './equipo-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ExploreContainerComponentModule,
    EquipoPageRoutingModule
  ],
  declarations: [EquipoPage]
})
export class EquipoPageModule {}
