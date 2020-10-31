import { Component, OnInit } from '@angular/core';

import { InventariosService } from '../../../services/inventarios.service';
import { Inventario } from '../../../../../models/inventario';

declare let $: any;
@Component({
  selector: 'app-inventarios',
  templateUrl: './inventarios.component.html',
  styleUrls: ['./inventarios.component.scss']
})
export class InventariosComponent implements OnInit {
  inventarios: Inventario[];

  constructor(private inventariosService: InventariosService) {
    this.inventarios = [];
  }

  ngOnInit(): void {
    this.getInventarios();
  }

  getInventarios(): void {
    this.inventariosService
      .getInventarios()
      .subscribe(inventarios => (this.inventarios = inventarios));
    this.inventariosService.currentInventario = this.inventarios[0];
  }

  nuevoInventario() {
    const nuevo: Inventario = {
      id: 10,
      productos: []
    };
    this.inventariosService.addInventario(nuevo)
      .subscribe(inventario => this.inventarios.push(inventario));
    $('#newModal').modal('hide');
  }
}
