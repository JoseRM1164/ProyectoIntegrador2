import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/views/dashboard/dashboard.component';

import { HomeComponent } from './components/views/home/home.component';
import { InventariosComponent } from './components/views/inventarios/inventarios.component';
import { ItemInventarioComponent } from './components/views/item-inventario/item-inventario.component';
import { NuevoPerfilComponent } from './components/views/nuevo-perfil/nuevo-perfil.component';
import { PerfilComponent } from './components/views/perfil/perfil.component';
import { ReportesComponent } from './components/views/reportes/reportes.component';
import { from } from 'rxjs';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'inventarios',
        component: InventariosComponent,
      },
      {
        path: 'item-inventario',
        component: ItemInventarioComponent
      },
      {
        path: 'perfil',
        component: PerfilComponent,
      },
      {
        path: 'nuevo-perfil',
        component: NuevoPerfilComponent
      },
      {
        path: 'reportes',
        component: ReportesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
