import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/views/dashboard/dashboard.component'

import { HomeComponent } from './components/views/home/home.component'
import { InventariosComponent } from './components/views/inventarios/inventarios.component'
import { PerfilComponent } from './components/views/perfil/perfil.component'
import { ReportesComponent } from './components/views/reportes/reportes.component'

const routes: Routes = [
  {
    path:'', 
    component: DashboardComponent,
    children: [
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'inventarios',
        component: InventariosComponent
      },
      {
        path:'perfil',
        component: PerfilComponent
      },
      {
        path:'reportes',
        component: ReportesComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
