import { Op } from "sequelize";
import { BebidaInterface } from "../interfaces/bebida";
import Bebida from "../models/bebida";

// Obtener todas las bebidas
const obtenerBebidas = async (): Promise<BebidaInterface[]> => {
  try {
    const bebidas: BebidaInterface[] = await Bebida.findAll();
    return bebidas;
  } catch (error) {
    throw new Error("Error al obtener bebidas");
  }
};

// Obtener una bebida por su ID
const obtenerBebidaPorId = async (bebidaId: number): Promise<BebidaInterface | null> => {
  try {
    const bebida: BebidaInterface | null = await Bebida.findByPk(bebidaId);
    return bebida;
  } catch (error) {
    throw new Error("Error al obtener la bebida por ID");
  }
};

// Obtener bebidas con filtros
const obtenerBebidasConFiltros = async (
  tipo: number | null,
  habilitado: boolean | null,
  nombre: string | null
): Promise<BebidaInterface[]> => {
  try {
    // Construye la condición de búsqueda basada en los filtros proporcionados
    const condiciones: any = {};
    if (tipo !== null && tipo) {
      condiciones.tipo = tipo;
    }
    if (habilitado !== null && habilitado) {
      condiciones.habilitado = habilitado;
    }
    if (nombre !== null && nombre) {
      condiciones.nombre = { [Op.like]: `%${nombre}%` };
    }

    const bebidas: BebidaInterface[] = await Bebida.findAll({
      where: condiciones,
    });

    return bebidas;
  } catch (error) {
    throw new Error("Error al obtener bebidas con filtros");
  }
};

// Crear una nueva bebida
const crearBebida = async (nuevaBebida: BebidaInterface): Promise<BebidaInterface> => {
  try {
    const bebidaCreada: BebidaInterface = await Bebida.create(nuevaBebida);
    return bebidaCreada;
  } catch (error) {
    throw new Error("Error al crear la bebida");
  }
};

// Actualizar una bebida por su ID
const actualizarBebida = async (
  bebidaId: number,
  datosActualizados: BebidaInterface
): Promise<number> => {
  try {
    const resultado: [number] = await Bebida.update(datosActualizados, {
      where: { id: bebidaId },
    });
    return resultado[0];
  } catch (error) {
    throw new Error("Error al actualizar la bebida");
  }
};

// habilito una bebida por su ID
const habilitarDeshabilitarBebida = async (
  bebidaId: number,
  habilitado: boolean
): Promise<number> => {
  try {
    const resultado: [number] = await Bebida.update(
      { habilitado: habilitado },
      {
        where: { id: bebidaId },
      }
    );
    return resultado[0];
  } catch (error) {
    throw new Error("Error al actualizar la bebida");
  }
};

// Eliminar una bebida por su ID
const eliminarBebida = async (bebidaId: number): Promise<number> => {
  try {
    const resultado: number = await Bebida.destroy({
      where: { id: bebidaId },
    });
    return resultado;
  } catch (error) {
    throw new Error("Error al eliminar la bebida");
  }
};

export {
  obtenerBebidas,
  obtenerBebidaPorId,
  obtenerBebidasConFiltros,
  crearBebida,
  actualizarBebida,
  habilitarDeshabilitarBebida,
  eliminarBebida,
};
