import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupRoutingModule } from './group-routing.module';
import { IndexComponent } from './components/index/index.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  declarations: [IndexComponent, DashboardComponent],
  imports: [
    CommonModule,
    GroupRoutingModule
  ]
})
export class GroupModule { }
