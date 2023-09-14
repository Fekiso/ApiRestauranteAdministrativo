import { DetalleCartaInterface } from "./detalleCarta.interface";

export interface CartaInterface {
  id: number;
  nombre: string;
  descripcion: string;
  fechaInicioValidez: string;
  fechaFinValidez: string;
  valida: boolean;
  habilitado: boolean;
  DetalleCarta?: DetalleCartaInterface[];
}
