import { TipoComidaInterface } from "./tipo.interface";

export interface ComidaInterface {
  id: number;
  nombre: string;
  descripcion: string;
  tipo: number;
  precio: number;
  habilitado: boolean;
  TipoComida?: TipoComidaInterface;
}
