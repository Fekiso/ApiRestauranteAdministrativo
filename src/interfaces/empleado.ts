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
}

export type AuthType = Pick<EmpleadoInterface, "user" | "pass" | "rol">;
