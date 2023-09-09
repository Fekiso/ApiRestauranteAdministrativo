import { TipoComidaInterface } from "../interfaces/auxiliares.interface";
import TipoComida from "../models/tipoComida.model";

// Método para crear un nuevo TipoComida
const crearTipoComida = async (nuevoTipoComida: TipoComidaInterface) => {
  try {
    const tipoComidaCreado = await TipoComida.create(nuevoTipoComida);
    return tipoComidaCreado;
  } catch (error) {
    throw new Error("Error al crear el TipoComida");
  }
};

// Método para obtener todos los TiposComida
const obtenerTodosLosTiposComida = async () => {
  try {
    const tiposComida = await TipoComida.findAll();
    return tiposComida;
  } catch (error) {
    throw new Error("Error al obtener todos los TiposComida");
  }
};

// Método para obtener TipoComida por ID
const obtenerTipoComidaPorId = async (tipoComidaId: number) => {
  try {
    const tipoComida = await TipoComida.findByPk(tipoComidaId);
    if (!tipoComida) {
      throw new Error("TipoComida no encontrado");
    }
    return tipoComida;
  } catch (error) {
    throw new Error("Error al obtener el TipoComida por ID");
  }
};

// Metodo para obtener TiposComida filtrados
const obtenerTipoComidaConFiltro = async (tipoComidaId?: number, habilitado?: boolean) => {
  try {
    const opcionesDeFiltro: any = {};

    if (tipoComidaId !== undefined) {
      opcionesDeFiltro.id = tipoComidaId;
    }

    if (habilitado !== undefined) {
      opcionesDeFiltro.habilitado = habilitado;
    }

    const tiposComida = await TipoComida.findAll({
      where: opcionesDeFiltro,
    });

    return tiposComida;
  } catch (error) {
    throw new Error("Error al obtener los TiposComida con filtro");
  }
};

// Método para actualizar TipoComida por ID
const actualizarTipoComida = async (
  tipoComidaId: number,
  datosActualizados: TipoComidaInterface
) => {
  try {
    const tipoComida = await TipoComida.findByPk(tipoComidaId);
    if (!tipoComida) {
      throw new Error("TipoComida no encontrado");
    }
    await tipoComida.update(datosActualizados);
    return tipoComida;
  } catch (error) {
    throw new Error("Error al actualizar el TipoComida");
  }
};

// Método para eliminar TipoComida por ID
const eliminarTipoComida = async (tipoComidaId: number) => {
  try {
    const tipoComida = await TipoComida.findByPk(tipoComidaId);
    if (!tipoComida) {
      throw new Error("TipoComida no encontrado");
    }
    await tipoComida.destroy();
  } catch (error) {
    throw new Error("Error al eliminar el TipoComida");
  }
};

export {
  crearTipoComida,
  obtenerTodosLosTiposComida,
  obtenerTipoComidaPorId,
  obtenerTipoComidaConFiltro,
  actualizarTipoComida,
  eliminarTipoComida,
};
