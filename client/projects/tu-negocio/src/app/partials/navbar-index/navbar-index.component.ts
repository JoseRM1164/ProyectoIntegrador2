import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare let $: any;
@Component({
  selector: 'app-navbar-index',
  templateUrl: './navbar-index.component.html',
  styleUrls: ['./navbar-index.component.scss']
})
export class NavbarIndexComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  btnLogInClick() {
    this.router.navigateByUrl('/dashboard');
    $('#LogInModal').modal('hide');
  }

}
