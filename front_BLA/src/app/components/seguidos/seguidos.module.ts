import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SeguidosPage } from './seguidos.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { SeguidosPageRoutingModule } from './seguidos-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    SeguidosPageRoutingModule
  ],
  declarations: [SeguidosPage]
})
export class SeguidosPageModule {}
