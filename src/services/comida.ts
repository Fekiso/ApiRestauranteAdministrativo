import { Request, Response } from "express";
import { ComidaId, ComidaInsUpd } from "../interfaces/comida";
import Comida from "../models/comida";
import sequelize from "../config/mysql";
import { QueryTypes } from "sequelize";

//@ts-ignore
const obtenerComidas = async (comida: ComidaInsUpd): Promise<Comida[]> => {
  try {
    const comidas: Comida[] = await sequelize.query<Comida>("CALL spComidaSel(?, ?, ?, ?, ?, ?)", {
      replacements: [
        comida.id,
        comida.nombre,
        comida.descripcion,
        comida.tipo,
        comida.precio,
        comida.habilitado,
      ],
      type: QueryTypes.SELECT, // Indicar que es una consulta SELECT
    });
    return comidas;
  } catch (error) {
    throw new Error("Error al obtener comidas");
  }
};

const insertarComida = async (comida: ComidaInsUpd) => {
  try {
    await sequelize.query("CALL spComidaIns(?, ?, ?, ?, ?)", {
      replacements: [comida.nombre, comida.descripcion, comida.tipo, comida.precio, null],
      type: QueryTypes.INSERT,
    });

    return true; // 201 Created
  } catch (error) {
    return error;
  }
};

const actualizarComida = async (comida: ComidaInsUpd) => {
  try {
    await sequelize.query("CALL spComidaUpd(?, ?, ?, ?, ?, ?)", {
      replacements: [
        comida.id,
        comida.nombre,
        comida.descripcion,
        comida.tipo,
        comida.precio,
        comida.habilitado,
      ],
      type: QueryTypes.UPDATE,
    });

    return true; // 201 Created
  } catch (error) {
    return error;
  }
};

const habilitarDeshabilitarComida = async (comida: ComidaInsUpd) => {
  try {
    await sequelize.query("CALL spComidaHabilitarDeshabilitar(?, ?)", {
      replacements: [comida.id, comida.habilitado],
      type: QueryTypes.UPDATE,
    });

    return true; // 201 Created
  } catch (error) {
    return error;
  }
};

const borrarComida = async (comida: ComidaId) => {
  try {
    await sequelize.query("CALL spComidaDel(?, ?, ?, ?, ?)", {
      replacements: [comida.id],
      type: QueryTypes.DELETE,
    });

    return true; // 201 Created
  } catch (error) {
    return error;
  }
};

export {
  obtenerComidas,
  insertarComida,
  actualizarComida,
  habilitarDeshabilitarComida,
  borrarComida,
};
