import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-item-inventario',
  templateUrl: './item-inventario.component.html',
  styleUrls: ['./item-inventario.component.scss']
})
export class ItemInventarioComponent implements OnInit {
  modeloProducto = this.formBuild.group({
    nombreProducto: ['', Validators.required],
    cantidadProducto: ['', [Validators.required]],
    caducidadProducto: ['', Validators.required],
    precioProducto: ['', [Validators.required]]
  });

  constructor(private formBuild: FormBuilder) { }

  ngOnInit(): void {
  }

  enviar() {}

}
