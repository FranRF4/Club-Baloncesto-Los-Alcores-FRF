import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TemporadaPage } from './temporada.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TemporadaPageRoutingModule } from './temporada-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { JornadaPageRoutingModule } from '../jornada/jornada-routing.module';
import { JornadaPage } from '../jornada/jornada.page';
import { JornadaService } from 'src/app/services/jornada.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ExploreContainerComponentModule,
    TemporadaPageRoutingModule
  ],
  declarations: [TemporadaPage]
})
export class TemporadaPageModule {}
