export interface BebidaInterface {
  id: number;
  nombre: string;
  descripcion: string;
  tipo: number;
  precio: number;
  habilitado: boolean;
}
//Omit: Crea copia y omite los campos indicados
//Pick: Crea copia los campos seleccionado de la interfaz indicada
