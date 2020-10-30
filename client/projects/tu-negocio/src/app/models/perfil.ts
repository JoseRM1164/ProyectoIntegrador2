export interface Perfil {
  id: number;
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
