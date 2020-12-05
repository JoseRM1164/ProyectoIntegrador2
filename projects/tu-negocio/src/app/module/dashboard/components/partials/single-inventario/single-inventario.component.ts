import { Component, OnInit, Input } from '@angular/core';

import { InventariosService } from '../../../services/inventarios.service';
import { Inventario } from '../../../../../models/inventario';

@Component({
  selector: 'app-single-inventario',
  templateUrl: './single-inventario.component.html',
  styleUrls: ['./single-inventario.component.scss']
})
export class SingleInventarioComponent implements OnInit {
  @Input() inventario!: Inventario;

  constructor(private inventariosService: InventariosService) { }

  ngOnInit(): void {
  }

  verInventario() {
    // this.inventariosService.modificarInventario(this.inventario);
  }

}
