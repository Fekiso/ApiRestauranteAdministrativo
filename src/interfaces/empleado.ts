export interface EmpleadoInterface {
  id: number;
  user: string;
  pass: string;
  nombre: string;
  apellido: string;
  tipoDocumento: number;
  nroDocumento: number;
  rol: number;
  telefono: string;
  email: string;
  habilitado: boolean;
  fecha_creacion: string;
  fecha_update: string;
}

export type AuthInterface = Pick<EmpleadoInterface, "user" | "pass">;
