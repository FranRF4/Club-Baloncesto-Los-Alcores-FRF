import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },{
        path: 'equipo/:id',
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
        path: 'partidos',
        loadChildren: () => import('../partido/partido.module').then(m => m.PartidoPageModule)
      },
      {
        path: 'partidos/partido/:id',
        loadChildren: () => import('../partidoDetail/partido-detail.module').then(m => m.PartidoDetailPageModule)
      },
      {
        path: 'usuario',
        loadChildren: () => import('../usuario/usuario.module').then(m => m.UsuarioPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
