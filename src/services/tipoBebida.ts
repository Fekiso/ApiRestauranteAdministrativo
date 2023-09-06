import { TipoBebidaInterface } from "../interfaces/auxiliares";
import TipoBebida from "../models/tipoBebida";

// Método para obtener todos los TiposBebida
const obtenerTodosLosTiposBebida = async () => {
  try {
    const tiposBebida = await TipoBebida.findAll();
    return tiposBebida;
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener todos los TiposBebida");
  }
};

// Método para obtener TipoBebida por ID
const obtenerTipoBebidaPorId = async (tipoBebidaId: number) => {
  try {
    const tipoBebida = await TipoBebida.findByPk(tipoBebidaId);
    if (!tipoBebida) {
      throw new Error("TipoBebida no encontrado");
    }
    return tipoBebida;
  } catch (error) {
    throw new Error("Error al obtener el TipoBebida por ID");
  }
};

// Metodo para obtener TiposBebida filtrados
const obtenerTipoBebidaConFiltro = async (tipoBebidaId?: number, habilitado?: boolean) => {
  try {
    // Construye un objeto de opciones de filtro basado en los parámetros proporcionados
    const opcionesDeFiltro: any = {};

    if (tipoBebidaId !== undefined) {
      opcionesDeFiltro.id = tipoBebidaId;
    }

    if (habilitado !== undefined) {
      opcionesDeFiltro.habilitado = habilitado;
    }

    const tiposBebida = await TipoBebida.findAll({
      where: opcionesDeFiltro,
    });

    return tiposBebida;
  } catch (error) {
    throw new Error("Error al obtener los TiposBebida con filtro");
  }
};

// Método para crear un nuevo TipoBebida
const crearTipoBebida = async (nuevoTipoBebida: TipoBebidaInterface) => {
  try {
    const tipoBebidaCreado = await TipoBebida.create(nuevoTipoBebida);
    return tipoBebidaCreado;
  } catch (error) {
    console.log(error);
    throw new Error("Error al crear el TipoBebida");
  }
};

// Método para actualizar TipoBebida por ID
const actualizarTipoBebida = async (
  tipoBebidaId: number,
  datosActualizados: TipoBebidaInterface
) => {
  try {
    const tipoBebida = await TipoBebida.findByPk(tipoBebidaId);
    if (!tipoBebida) {
      throw new Error("TipoBebida no encontrado");
    }
    await tipoBebida.update(datosActualizados);
    return tipoBebida;
  } catch (error) {
    throw new Error("Error al actualizar el TipoBebida");
  }
};

// Método para eliminar TipoBebida por ID
const eliminarTipoBebida = async (tipoBebidaId: number) => {
  try {
    const tipoBebida = await TipoBebida.findByPk(tipoBebidaId);
    if (!tipoBebida) {
      throw new Error("TipoBebida no encontrado");
    }
    await tipoBebida.destroy();
  } catch (error) {
    throw new Error("Error al eliminar el TipoBebida");
  }
};

export {
  obtenerTodosLosTiposBebida,
  obtenerTipoBebidaPorId,
  obtenerTipoBebidaConFiltro,
  crearTipoBebida,
  actualizarTipoBebida,
  eliminarTipoBebida,
};
