import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/views/home/home.component'
import { DashboardComponent } from './components/views/dashboard/dashboard.component'

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
        component:HomeComponent
      },
      {
        path:'perfil',
        component:HomeComponent
      },
      {
        path:'menu-perfiles',
        component:HomeComponent
      },
      {
        path:'reportes',
        component:HomeComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
