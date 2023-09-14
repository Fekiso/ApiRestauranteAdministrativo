import { DetallePromocionInterface } from "./detallePromocion.interface";

export interface PromocionInterface {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  fechaInicio: string;
  fechaFin: string;
  horaInicio: string;
  horaFin: string;
  validoLunes: boolean;
  validoMartes: boolean;
  validoMiercoles: boolean;
  validoJueves: boolean;
  validoViernes: boolean;
  validoSabado: boolean;
  validoDomingo: boolean;
  habilitado: boolean;
  DetallesPromocion?: DetallePromocionInterface[];
}
