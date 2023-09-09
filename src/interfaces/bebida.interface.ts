import { TipoBebidaInterface } from "./tipo.interface";

export interface BebidaInterface {
  id: number;
  nombre: string;
  descripcion: string;
  tipo: number;
  precio: number;
  habilitado: boolean;
  TipoBebida?: TipoBebidaInterface;
}
