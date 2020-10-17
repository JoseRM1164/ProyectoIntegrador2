import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/views/dashboard/dashboard.component';
import { SidebarComponent } from './components/partials/sidebar/sidebar.component';
import { HomeComponent } from './components/views/home/home.component';
import { InventariosComponent } from './components/views/inventarios/inventarios.component';
import { PerfilComponent } from './components/views/perfil/perfil.component';
import { ReportesComponent } from './components/views/reportes/reportes.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { NavDashboardComponent } from './components/partials/nav-dashboard/nav-dashboard.component';


@NgModule({
  declarations: [DashboardComponent, SidebarComponent, HomeComponent, InventariosComponent, PerfilComponent, ReportesComponent, FooterComponent, NavDashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
})
export class DashboardModule { }
