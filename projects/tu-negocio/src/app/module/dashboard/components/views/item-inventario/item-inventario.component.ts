import { Component, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

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
  dataTable: any;
  dtOptions: any;
  tableData: Producto[] = [];
  @ViewChild('dataTable', {static: true}) table: any;

  modeloProducto = this.formBuild.group({
    nombreProducto: ['', Validators.required],
    cantidadProducto: ['', [Validators.required]],
    caducidadProducto: ['', Validators.required],
    precioProducto: ['', [Validators.required]]
  });

  constructor(
    private formBuild: FormBuilder,
    private inventariosService: InventariosService,
    private router: Router
  ) {
    this.inventario = this.inventariosService.currentInventario;
    if (this.inventario._id === 'none') {
      this.router.navigateByUrl('/dashboard/inventarios');
    }
  }

  ngOnInit(): void {
    this.getInventario();
  }

  toggleSidebar() {
    $('#sidebar').toggleClass('active');
  }


  getInventario(): void {
    this.inventariosService
    .getProductos(this.inventario._id)
    .subscribe(productos => {
      this.tableData = productos;
      this.dtOptions = {
        data: this.tableData,
        columns: [
          { title: 'ID', data: '_id'},
          { title: 'nombre', data: 'name'},
          { title: 'cantidad', data: 'cantindad'},
          { title: 'caducidad', data: 'caducidad'},
          { title: 'precio', data: 'precio'}
        ]
      };
    }, err => {}, () => {
      this.dataTable = $(this.table.nativeElement);
      this.dataTable.DataTable(this.dtOptions);
    });
  }

  enviar() {
    const nuevoProducto: Producto = {
      _id: 'Nuevo!',
      name: String(this.modeloProducto.value.nombreProducto),
      cantindad: Number(this.modeloProducto.value.cantidadProducto),
      caducidad: String(this.modeloProducto.value.caducidadProducto),
      precio: Number(this.modeloProducto.value.precioProducto),
      invenID: this.inventario._id
    };
    this.inventariosService.addProducto(nuevoProducto)
      .subscribe(producto => {
        this.tableData.push(nuevoProducto);
        this.dataTable.DataTable().row.add(nuevoProducto).draw();
      });
    $('#ProductoModal').modal('hide');
  }
}
