import { TipoDocumentoInterface } from "../interfaces/auxiliares";
import TipoDocumento from "../models/tipoDocumento";

// Método para crear un nuevo TipoDocumento
const crearTipoDocumento = async (nuevoTipoDocumento: TipoDocumentoInterface) => {
  try {
    const tipoDocumentoCreado = await TipoDocumento.create(nuevoTipoDocumento);
    console.log(tipoDocumentoCreado);
    return tipoDocumentoCreado;
  } catch (error) {
    console.log(error);
    throw new Error("Error al crear el TipoDocumento");
  }
};

// Método para obtener todos los TipoDocumento
const obtenerTodosLosTipoDocumento = async () => {
  try {
    const tiposDocumento = await TipoDocumento.findAll();
    return tiposDocumento;
  } catch (error) {
    throw new Error("Error al obtener todos los TipoDocumento");
  }
};

// Metodo para obtener TipoDocumento filtrados
const obtenerTipoDocumentoConFiltro = async (tipoDocumentoId?: number, habilitado?: boolean) => {
  try {
    // Construye un objeto de opciones de filtro basado en los parámetros proporcionados
    const opcionesDeFiltro: any = {};

    if (tipoDocumentoId !== undefined) {
      opcionesDeFiltro.id = tipoDocumentoId;
    }

    if (habilitado !== undefined) {
      opcionesDeFiltro.habilitado = habilitado;
    }

    const tiposDocumento = await TipoDocumento.findAll({
      where: opcionesDeFiltro,
    });

    return tiposDocumento;
  } catch (error) {
    throw new Error("Error al obtener los TipoDocumento con filtro");
  }
};

// Método para obtener TipoDocumento por ID
const obtenerTipoDocumentoPorId = async (tipoDocumentoId: number) => {
  try {
    const tipoDocumento = await TipoDocumento.findByPk(tipoDocumentoId);
    if (!tipoDocumento) {
      throw new Error("TipoDocumento no encontrado");
    }
    return tipoDocumento;
  } catch (error) {
    throw new Error("Error al obtener el TipoDocumento por ID");
  }
};

// Método para actualizar TipoDocumento por ID
const actualizarTipoDocumento = async (
  tipoDocumentoId: number,
  datosActualizados: TipoDocumentoInterface
) => {
  try {
    const tipoDocumento = await TipoDocumento.findByPk(tipoDocumentoId);
    if (!tipoDocumento) {
      throw new Error("TipoDocumento no encontrado");
    }
    await tipoDocumento.update(datosActualizados);
    return tipoDocumento;
  } catch (error) {
    throw new Error("Error al actualizar el TipoDocumento");
  }
};

// Método para eliminar TipoDocumento por ID
const eliminarTipoDocumento = async (tipoDocumentoId: number) => {
  try {
    const tipoDocumento = await TipoDocumento.findByPk(tipoDocumentoId);
    if (!tipoDocumento) {
      throw new Error("TipoDocumento no encontrado");
    }
    await tipoDocumento.destroy();
  } catch (error) {
    throw new Error("Error al eliminar el TipoDocumento");
  }
};

export {
  crearTipoDocumento,
  obtenerTodosLosTipoDocumento,
  obtenerTipoDocumentoConFiltro,
  actualizarTipoDocumento,
  eliminarTipoDocumento,
};
