import TipoDocumento from "../models/tipoDocumento.model";
import TipoRol from "../models/tipoRol.model";

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
  TipoDocumento?: TipoDocumento;
  TipoRol?: TipoRol;
}

export type AuthType = Pick<EmpleadoInterface, "user" | "pass" | "rol">;
