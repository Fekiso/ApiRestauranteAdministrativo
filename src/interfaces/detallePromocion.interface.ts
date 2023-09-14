import { BebidaInterface } from "./bebida.interface";
import { ComidaInterface } from "./comida.interface";

export interface DetallePromocionInterface {
  id: number;
  promocion: number;
  comida: number;
  bebida: number;
  cantidad: number;
  Comida?: ComidaInterface | null;
  Bebida?: BebidaInterface | null;
}
