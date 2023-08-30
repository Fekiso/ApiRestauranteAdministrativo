interface AuxiliarInterface {
  id: number;
  nombre: string;
  descripcion: string;
  habilitado: boolean;
  fecha_creacion: string;
  fecha_update: string;
}

export interface TipoComidaInterface extends AuxiliarInterface {}
export interface TipoBebidaInterface extends AuxiliarInterface {}
export interface TipoRolInterface extends AuxiliarInterface {}
export interface TipoDocumentoInterface extends AuxiliarInterface {}
