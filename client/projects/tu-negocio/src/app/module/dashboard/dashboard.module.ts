import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/views/dashboard/dashboard.component';
import { SidebarComponent } from './components/partials/sidebar/sidebar.component';
import { HomeComponent } from './components/views/home/home.component';
import { InventariosComponent } from './components/views/inventarios/inventarios.component';
import { PerfilComponent } from './components/views/perfil/perfil.component';
import { ReportesComponent } from './components/views/reportes/reportes.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { NavDashboardComponent } from './components/partials/nav-dashboard/nav-dashboard.component';
import { NuevoPerfilComponent } from './components/views/nuevo-perfil/nuevo-perfil.component';
import { ItemInventarioComponent } from './components/views/item-inventario/item-inventario.component';
import { DashboardService } from './services/dashboard.service';


@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    HomeComponent,
    InventariosComponent,
    PerfilComponent,
    ReportesComponent,
    FooterComponent,
    NavDashboardComponent,
    NuevoPerfilComponent,
    ItemInventarioComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

    // HttpClientInMemoryModule itercepts HTTP reequests
    // Remove it when a real serve is ready to receive requests
    HttpClientInMemoryWebApiModule.forRoot(
      DashboardService, { dataEncapsulation: false }
    )
  ],
})
export class DashboardModule { }
