export interface BebidaInterface {
  id: number;
  nombre: string;
  descripcion: string;
  tipo: number;
  precio: number;
  habilitado: boolean;
  fecha_creacion: string;
  fecha_update: string;
}
//Omit: Crea copia y omite los campos indicados
//Pick: Crea copia los campos seleccionado de la interfaz indicada
export type BebidaId = Pick<BebidaInterface, "id">;
export type Bebida = Omit<BebidaInterface, "fecha_creacion" | "fecha_update">;
export type BebidaInsUpd = Omit<BebidaInterface, "fecha_creacion" | "fecha_update">;
export type BebidaAdmin = Omit<BebidaInterface, "fecha_creacion">;
