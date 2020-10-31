import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

declare let $: any;
@Component({
  selector: 'app-navbar-index',
  templateUrl: './navbar-index.component.html',
  styleUrls: ['./navbar-index.component.scss']
})
export class NavbarIndexComponent implements OnInit {

  constructor(private router: Router, public translate: TranslateService) { 
    translate.addLangs(['es', 'en']);
    translate.setDefaultLang('es');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|es/) ? browserLang : 'es'); 
  }

  ngOnInit(): void {
  }

  btnLogInClick() {
    this.router.navigateByUrl('/dashboard');
    $('#LogInModal').modal('hide');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
    console.log(lang);
  }

}
