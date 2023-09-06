import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { ComidaInterface } from "../interfaces/comida";
import {
  obtenerComidas,
  obtenerComidaPorId,
  crearComida,
  actualizarComida,
  eliminarComida,
  obtenerComidasConFiltros,
  habilitarDeshabilitarComida,
} from "../services/comida";

const getComidas = async (req: Request, res: Response) => {
  try {
    const comidas: ComidaInterface[] = await obtenerComidas();
    res.status(200).json(comidas);
  } catch (e) {
    handleHttp(res, "Error_getComidas");
  }
};

const getComidaByID = async (req: Request, res: Response) => {
  try {
    const { params } = req;
    const comidaId: number = parseInt(params.id);
    const comida: ComidaInterface | null = await obtenerComidaPorId(comidaId);
    res.status(200).send(comida);
  } catch (e) {
    handleHttp(res, "Error_getComida");
  }
};

const getComidasFiltradas = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const { tipo, habilitado, nombre } = body;
    const comidas: ComidaInterface[] = await obtenerComidasConFiltros(tipo, habilitado, nombre);
    res.status(200).send(comidas);
  } catch (e) {
    handleHttp(res, "Error_getComida");
  }
};

const postComida = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const nuevaComida: ComidaInterface = body;
    const responseComida = await crearComida(nuevaComida);
    res.status(201).send(responseComida);
  } catch (e) {
    handleHttp(res, "Error_postComida");
  }
};

const putComida = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const comidaId: number = body.id;
    const datosActualizados: ComidaInterface = body;
    const responseComida = await actualizarComida(comidaId, datosActualizados);
    res.status(204).send(responseComida);
  } catch (e) {
    handleHttp(res, "Error_putComida");
  }
};

const putHabilitarDeshabilitarComida = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const comidaId: number = body.id;
    const habilitado: boolean = body.habilitado;
    const responseComida = await habilitarDeshabilitarComida(comidaId, habilitado);
    res.status(204).send(responseComida);
  } catch (e) {
    handleHttp(res, "Error_putComida");
  }
};

const deleteComida = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const comidaId: number = body.id;
    const responseComida = await eliminarComida(comidaId);
    res.status(204).send(responseComida);
  } catch (e) {
    handleHttp(res, "Error_deleteComida");
  }
};

export {
  getComidas,
  getComidaByID,
  getComidasFiltradas,
  postComida,
  putComida,
  putHabilitarDeshabilitarComida,
  deleteComida,
};
