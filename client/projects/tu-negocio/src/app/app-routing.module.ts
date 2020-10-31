import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './views/index/index.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component'

const routes: Routes = [
  {
    path:'', 
    component:IndexComponent,
    data: { animation: 'HomePage' }
  },
  {
    path:'dashboard',
    loadChildren: './module/dashboard/dashboard.module#DashboardModule',
    data: { animation: 'ToDashboard'}
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: { animation: 'NotFoundPage' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
