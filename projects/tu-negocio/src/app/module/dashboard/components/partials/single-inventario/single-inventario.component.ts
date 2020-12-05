import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { InventariosService } from '../../../services/inventarios.service';
import { Inventario } from '../../../../../models/inventario';

@Component({
  selector: 'app-single-inventario',
  templateUrl: './single-inventario.component.html',
  styleUrls: ['./single-inventario.component.scss']
})
export class SingleInventarioComponent implements OnInit {
  @Input() inventario!: Inventario;

  constructor(private router: Router, private inventariosService: InventariosService) { }

  ngOnInit(): void {
  }

  verInventario() {
    this.router.navigateByUrl('/dashboard/item-inventario');
    this.inventariosService.accederInventario(this.inventario);
  }

  borrarInventario() {
    this.inventariosService.borrarInventario(this.inventario);
    this.router.navigateByUrl('dashboard/inventarios');
  }

}
