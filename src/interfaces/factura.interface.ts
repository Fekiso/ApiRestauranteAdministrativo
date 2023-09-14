import { DetalleFacturaInterface } from "./detalleFactura.interface";
import { EmpleadoInterface } from "./empleado.interface";
import { MesaInterface } from "./mesa.interface";
import { PedidoInterface } from "./pedido.interface";
import { TipoEstadoFacturaInterface, TipoPagoInterface } from "./tipo.interface";

export interface FacturaInterface {
  id: number;
  valida: boolean;
  estado: number;
  metodoPago: number;
  mesa: number;
  empleadoAtiende: number;
  empleadoFacturo: number;
  EmpleadoAtendio?: EmpleadoInterface;
  EmpleadoFacturo?: EmpleadoInterface;
  Mesa?: MesaInterface;
  EstadoFactura?: TipoEstadoFacturaInterface;
  MetodoPago?: TipoPagoInterface;
  DetalleFactura?: DetalleFacturaInterface[];
}
