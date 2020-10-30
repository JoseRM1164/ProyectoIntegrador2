import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { NavbarIndexComponent } from './partials/navbar-index/navbar-index.component';
import { IndexComponent } from './views/index/index.component';

import { DashboardModule } from './module/dashboard/dashboard.module';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { IndexCarouselComponent } from './partials/index-carousel/index-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarIndexComponent,
    IndexComponent,
    PageNotFoundComponent,
    IndexCarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DashboardModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
