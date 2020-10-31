import { Component, OnInit } from '@angular/core';

declare let $: any;
@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss']
})
export class ReportesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
}
