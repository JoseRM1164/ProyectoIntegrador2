import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './views/index/index.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component'

const routes: Routes = [
  {
    path:'', 
    component:IndexComponent
  },
  {
    path:'dashboard',
    loadChildren: './module/group/group.module#GroupModule'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
