import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'equipo',
        loadChildren: () => import('../equipo/equipo.module').then(m => m.EquipoPageModule)
      },
      {
        path: 'temporada',
        loadChildren: () => import('../temporada/temporada.module').then(m => m.TemporadaPageModule)
      },
      {
        path: 'jornadas',
        loadChildren: () => import('../jornada/jornada.module').then(m => m.JornadaPageModule)
      },
      {
        path: 'jugador',
        loadChildren: () => import('../jugador/jugador.module').then(m => m.JugadorPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/equipo',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/equipo',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
