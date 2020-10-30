import { Producto } from './producto';

export interface Inventario {
  productos: [Producto];
}

export const INVENTARIO = {
  productos: [
    {
      nombre: 'Bocadillos',
      cantidad: 30,
      caducidad: '30-12-2020',
      precio: 20
    }
  ]
};

