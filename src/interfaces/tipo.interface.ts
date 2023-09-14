interface AuxiliarInterface {
  id: number;
  nombre: string;
  descripcion: string;
  habilitado: boolean;
}

export interface TipoComidaInterface extends AuxiliarInterface {}
export interface TipoBebidaInterface extends AuxiliarInterface {}
export interface TipoEstadoPedidoInterface extends AuxiliarInterface {}
export interface TipoEstadoFacturaInterface extends AuxiliarInterface {}
export interface TipoRolInterface extends AuxiliarInterface {}
export interface TipoPagoInterface extends AuxiliarInterface {}
export interface TipoDocumentoInterface extends AuxiliarInterface {}
