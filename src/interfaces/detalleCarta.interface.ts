import { BebidaInterface } from "./bebida.interface";
import { ComidaInterface } from "./comida.interface";
import { PromocionInterface } from "./promocion.interface";

export interface DetalleCartaInterface {
  id: number;
  carta: number;
  promocion: number | null;
  comida: number | null;
  bebida: number | null;
  Comida?: ComidaInterface | null;
  Bebida?: BebidaInterface | null;
  Promocion?: PromocionInterface | null;
}
