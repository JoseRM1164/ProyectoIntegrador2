import { Component, OnInit } from '@angular/core';

import { InventariosService } from '../../../services/inventarios.service';
import { MaxPriceInv, MaxProdInv} from '../../../../../models/inventario';

declare let $: any;
@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss']
})
export class ReportesComponent implements OnInit {
  maxPrice: MaxPriceInv[] = [];
  maxProd: MaxProdInv[] = [];
  public chartData = [];

  constructor(private inventariosService: InventariosService) { }

  ngOnInit(): void {
    this.getMaxPrice();
    this.getMaxProd();
  }

  getMaxPrice(): void {
    this.inventariosService.getMaxPriceInventarios()
    .subscribe(maxprices => {
      this.maxPrice = maxprices;
      this.chartData = [
    { data: [this.maxPrice[0].sumTotal, 600, 260, 700], label: 'Account A' },
    { data: [120, 455, 100, 340], label: 'Account B' },
    { data: [45, 67, 800, 500], label: 'Account C' }
      ];
    });
  }

  getMaxProd(): void {
    this.inventariosService.getMaxProd()
    .subscribe(maxprods => this.maxProd = maxprods);
  }
  
  toggleSidebar() {
    $('#sidebar').toggleClass('active');
  }

  public chartOptions = { responsive: true };


  public chartLabels = ['January', 'February', 'Mars', 'April'];
}
