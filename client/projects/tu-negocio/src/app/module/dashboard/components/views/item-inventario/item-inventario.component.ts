import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

import { InventariosService } from '../../../services/inventarios.service';
import { Inventario } from '../../../../../models/inventario';
import { Producto } from '../../../../../models/producto';

declare let $: any;
@Component({
  selector: 'app-item-inventario',
  templateUrl: './item-inventario.component.html',
  styleUrls: ['./item-inventario.component.scss']
})
export class ItemInventarioComponent implements OnInit {
  inventario: Inventario;

  modeloProducto = this.formBuild.group({
    nombreProducto: ['', Validators.required],
    cantidadProducto: ['', [Validators.required]],
    caducidadProducto: ['', Validators.required],
    precioProducto: ['', [Validators.required]]
  });

  constructor(
    private formBuild: FormBuilder,
    private inventariosService: InventariosService
  ) {
    this.inventario = this.inventariosService.currentInventario;
  }

  ngOnInit(): void {
    this.getInventario();
  }

  toggleSidebar() {
    $('#sidebar').toggleClass('active');
  }


  getInventario(): void {
    this.inventariosService
      .getInventarios()
      .subscribe(inventarios => (this.inventario = inventarios[0]));
  }

  enviar() {
    const nuevoProducto: Producto = {
      id: 5,
      nombre: String(this.modeloProducto.value.nombreProducto),
      cantidad: Number(this.modeloProducto.value.cantidadProducto),
      caducidad: String(this.modeloProducto.value.caducidadProducto),
      precio: Number(this.modeloProducto.value.precioProducto)
    };
    this.inventario.productos.push(nuevoProducto);
    this.inventariosService.updateInventario(this.inventario);
    $('#ProductoModal').modal('hide');
  }
}
