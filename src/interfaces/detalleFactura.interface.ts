import { BebidaInterface } from "./bebida.interface";
import { ComidaInterface } from "./comida.interface";
import { FacturaInterface } from "./factura.interface";
import { PromocionInterface } from "./promocion.interface";

export interface DetalleFacturaInterface {
  id: number;
  factura: number;
  promocion: number | null;
  comida: number | null;
  bebida: number | null;
  nombreProducto: string;
  precio: number;
  cantidad: number;
  Comida?: ComidaInterface | null;
  Bebida?: BebidaInterface | null;
  Promocion?: PromocionInterface | null;
  Factura?: FacturaInterface | null;
}
