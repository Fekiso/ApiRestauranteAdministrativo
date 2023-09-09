import { Op } from "sequelize";
import { ComidaInterface } from "../interfaces/comida.interface";
import Comida from "../models/comida.model";
import TipoComida from "../models/tipoComida.model";

// Obtener todas las comidas
const obtenerComidas = async (): Promise<ComidaInterface[]> => {
  try {
    const comidas: ComidaInterface[] = await Comida.findAll();
    return comidas;
  } catch (error) {
    throw new Error("Error al obtener comidas");
  }
};

// Obtener una comida por su ID
const obtenerComidaPorId = async (comidaId: number): Promise<ComidaInterface | null> => {
  try {
    const comida: ComidaInterface | null = await Comida.findByPk(comidaId);
    return comida;
  } catch (error) {
    throw new Error("Error al obtener la comida por ID");
  }
};

// Obtener comidas con filtros
const obtenerComidasConFiltros = async (
  tipo: number | null,
  habilitado: boolean | null,
  nombre: string | null
): Promise<ComidaInterface[]> => {
  try {
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

    const comidas: ComidaInterface[] = await Comida.findAll({
      where: condiciones,
      include: [
        {
          model: TipoComida,
          as: "tipoComida",
          attributes: ["nombre", "habilitado"],
        },
      ],
    });

    return comidas;
  } catch (error) {
    throw new Error("Error al obtener comidas con filtros");
  }
};

// Crear una nueva comida
const crearComida = async (nuevaComida: ComidaInterface): Promise<ComidaInterface> => {
  try {
    const comidaCreada: ComidaInterface = await Comida.create(nuevaComida);
    return comidaCreada;
  } catch (error) {
    throw new Error("Error al crear la comida");
  }
};

// Actualizar una comida por su ID
const actualizarComida = async (
  comidaId: number,
  datosActualizados: ComidaInterface
): Promise<number> => {
  try {
    const resultado: [number] = await Comida.update(datosActualizados, {
      where: { id: comidaId },
    });
    return resultado[0];
  } catch (error) {
    throw new Error("Error al actualizar la comida");
  }
};

// habilito una comida por su ID
const habilitarDeshabilitarComida = async (
  comidaId: number,
  habilitado: boolean
): Promise<number> => {
  try {
    const resultado: [number] = await Comida.update(
      { habilitado: habilitado },
      {
        where: { id: comidaId },
      }
    );
    return resultado[0];
  } catch (error) {
    throw new Error("Error al actualizar la comida");
  }
};

// Eliminar una comida por su ID
const eliminarComida = async (comidaId: number): Promise<number> => {
  try {
    const resultado: number = await Comida.destroy({
      where: { id: comidaId },
    });
    return resultado;
  } catch (error) {
    throw new Error("Error al eliminar la comida");
  }
};

export {
  obtenerComidas,
  obtenerComidaPorId,
  obtenerComidasConFiltros,
  crearComida,
  actualizarComida,
  habilitarDeshabilitarComida,
  eliminarComida,
};
