import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

declare let $: any;
@Component({
  selector: 'app-navbar-index',
  templateUrl: './navbar-index.component.html',
  styleUrls: ['./navbar-index.component.scss']
})
export class NavbarIndexComponent implements OnInit, OnDestroy {


  constructor(private router: Router, public translate: TranslateService, private el: ElementRef) { 
    translate.addLangs(['es', 'en']);
    translate.setDefaultLang('es');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|es/) ? browserLang : 'es'); 
  }

  ngOnInit(): void {
    $("html").attr("lang", this.translate.getBrowserLang() ); 
  }

  ngOnDestroy(): void {

  }

  btnLogInClick() {
    this.router.navigateByUrl('/dashboard');
    $('#LogInModal').modal('hide');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
    $("html").attr("lang", lang);
  }

}
