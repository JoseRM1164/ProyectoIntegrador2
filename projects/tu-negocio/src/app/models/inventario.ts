import { Producto } from './producto';

export interface Inventario {
  id: number;
  productos: Producto[];
}
