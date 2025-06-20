import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartidoDetailPage } from './partido-detail.page';

const routes: Routes = [
  {
    path: '',
    component: PartidoDetailPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartidoDetailPageRoutingModule {}
