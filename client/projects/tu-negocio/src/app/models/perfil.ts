export interface Perfil {
  nombre: string;
  apellidos: string;
  correo: string;
  contrasena: string;
  telefono: string;
  admin: boolean;
  lectura: boolean;
  escritura: boolean;
  borrado: boolean;
}

export const PERFILES = [
  {
    nombre: 'Jose',
    apellidos: 'Martinez',
    correo: 'j.velez@itesm.mx',
    contrasena: '1234',
    telefono: '12345657',
    admin: true,
    lectura: true,
    escritura: true,
    borrado: true
  }
];
