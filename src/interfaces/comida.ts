export interface ComidaInterface {
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
export type ComidaId = Pick<ComidaInterface, "id">;
export type Comida = Omit<ComidaInterface, "fecha_creacion" | "fecha_update">;
export type ComidaInsUpd = Omit<ComidaInterface, "fecha_creacion" | "fecha_update">;
export type ComidaAdmin = Omit<ComidaInterface, "fecha_creacion">;
