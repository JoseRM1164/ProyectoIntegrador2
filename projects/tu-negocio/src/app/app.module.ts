import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ChartsModule} from 'ng2-charts';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import {AuthModule, AuthHttpInterceptor} from '@auth0/auth0-angular';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './partials/header/header.component';
import {FooterComponent} from './partials/footer/footer.component';
import {NavbarIndexComponent} from './partials/navbar-index/navbar-index.component';
import {IndexComponent} from './views/index/index.component';

import {DashboardModule} from './module/dashboard/dashboard.module';
import {PageNotFoundComponent} from './views/page-not-found/page-not-found.component';
import {IndexCarouselComponent} from './partials/index-carousel/index-carousel.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
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
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    DashboardModule,
    ChartsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    AuthModule.forRoot({
      // The domain and clientId were configured in the previous chapter
      domain: 'tunegocio.us.auth0.com',
      clientId: '6Nk6ueM27Am4htjttAMteQDeoSex93jl',


      // Specify configuration for the interceptor
      httpInterceptor: {
        allowedList: [
          {
            // Match any request that starts 'https://tunegocio.us.auth0.com/api/v2/' (note the asterisk)
            uri: 'http://localhost:4000/api/*',
            tokenOptions: {
              // The attached token should target this audience
              audience: 'localhost:4000/api',

              // The attached token should have these scopes
            },
          },
        ],
      },
    }),
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
