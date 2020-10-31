import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { animacionesClase } from './animaciones'; 
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [animacionesClase]
})
export class AppComponent {
  title = 'tuNegocio';

  constructor(public translate: TranslateService) {
    translate.getLangs();
  }
  
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  } 
}   
