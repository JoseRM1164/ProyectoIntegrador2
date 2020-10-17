import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/views/dashboard/dashboard.component';
import { SidebarComponent } from './components/partials/sidebar/sidebar.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/views/home/home.component';
import { InventariosComponent } from './components/views/inventarios/inventarios.component';
import { PerfilComponent } from './components/views/perfil/perfil.component';
import { MenuPerfilesComponent } from './components/views/menu-perfiles/menu-perfiles.component';
import { ReportesComponent } from './components/views/reportes/reportes.component';


@NgModule({
  declarations: [DashboardComponent, SidebarComponent, HeaderComponent, HomeComponent, InventariosComponent, PerfilComponent, MenuPerfilesComponent, ReportesComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
})
export class DashboardModule { }
