import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Perfil } from '../../../models/perfil';
import { Inventario } from '../../../models/inventario';

@Injectable({
  providedIn: 'root'
})
export class DashboardService implements InMemoryDbService {
  createDb() {
    const perfiles = [
      {
        id: 1,
        nombre: 'Jose',
        apellidos: 'Martinez',
        correo: 'j.velez@itesm.mx',
        password: '1234',
        telefono: '12345657',
        admin: true,
        lectura: true,
        escritura: true,
        borrado: true
      }, {
        id: 2,
        nombre: 'Mario',
        apellidos: 'Velez',
        correo: 'm.velez@itesm.mx',
        password: '1234',
        telefono: '2345678',
        admin: true,
        lectura: true,
        escritura: true,
        borrado: true
      }, {
        id: 3,
        nombre: 'Ana',
        apellidos: 'Gonzalez',
        correo: 'a.gonzalez@itesm.mx',
        password: '1234',
        telefono: '3456789',
        admin: true,
        lectura: true,
        escritura: true,
        borrado: true
      }
    ];
    return { perfiles };
  }

  genId(perfiles: Perfil[]): number {
    return perfiles.length > 0 ? Math.max(...perfiles.map(perfil => perfil.id)) + 1 : 3;
  }
}
