import { Component, OnInit } from '@angular/core';

import { InventariosService } from '../../../services/inventarios.service';
import { Inventario } from '../../../../../models/inventario';

declare let $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  inventarios: Inventario[];

  constructor(private inventariosService: InventariosService) {
    this.inventarios = [];
  }

  ngOnInit(): void {
    this.getInventarios();
  }

  toggleSidebar() {
    $('#sidebar').toggleClass('active');
  }

  public chartOptions = { responsive: true };

  public chartData = [
    { data: [330, 600, 260, 700], label: 'Account A' },
    { data: [120, 455, 100, 340], label: 'Account B' },
    { data: [45, 67, 800, 500], label: 'Account C' }
  ];

  public chartLabels = ['January', 'February', 'Mars', 'April'];

  getLang() {
    let lang = $("html").attr("lang");
    return lang
  }

  getInventarios(): void {
    this.inventariosService
      .getInventarios(this.getLang())
      .subscribe(inventarios => (this.inventarios = inventarios));
  }

}
