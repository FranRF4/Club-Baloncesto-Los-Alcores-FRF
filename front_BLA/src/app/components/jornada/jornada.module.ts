import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JornadaPage } from './jornada.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { JornadaPageRoutingModule } from './jornada-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ExploreContainerComponentModule,
    JornadaPageRoutingModule
  ],
  declarations: [JornadaPage]
})
export class JornadaPageModule {}
