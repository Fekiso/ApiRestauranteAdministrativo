import { BebidaInterface } from "./bebida.interface";
import { ComidaInterface } from "./comida.interface";
import { PedidoInterface } from "./pedido.interface";
import { PromocionInterface } from "./promocion.interface";

export interface DetallePedidoInterface {
  id: number;
  pedido: number;
  promocion: number | null;
  comida: number | null;
  bebida: number | null;
  nombreProducto: string;
  precio: number;
  cantidad: number;
  Pedido?: PedidoInterface | null;
  Comida?: ComidaInterface | null;
  Bebida?: BebidaInterface | null;
  Promocion?: PromocionInterface | null;
}
