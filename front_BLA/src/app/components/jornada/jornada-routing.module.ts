import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JornadaPage } from './jornada.page';

const routes: Routes = [
  {
    path: '',
    component: JornadaPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JornadaPageRoutingModule {}
