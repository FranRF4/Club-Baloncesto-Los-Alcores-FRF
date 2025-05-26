import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PartidoDetailPage } from './partido-detail.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PartidoDetailPageRoutingModule } from './partido-Detail-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    PartidoDetailPageRoutingModule
  ],
  declarations: [PartidoDetailPage]
})
export class PartidoDetailPageModule {}
