import { Response } from "express";
import { handleHttp } from "../utils/error.handle";
import {
  actualizarBebida,
  crearBebida,
  eliminarBebida,
  habilitarDeshabilitarBebida,
  obtenerBebidaPorId,
  obtenerBebidas,
  obtenerBebidasConFiltros,
} from "../services/bebida";
import { BebidaInterface } from "../interfaces/bebida";
import { RequestExt } from "../interfaces/request";

const getBebidas = async (req: RequestExt, res: Response) => {
  try {
    const bebidas: BebidaInterface[] = await obtenerBebidas();
    res.status(200).json(bebidas);
  } catch (e) {
    handleHttp(res, "Error_getBebidas");
  }
};

const getBebidaByID = async (req: RequestExt, res: Response) => {
  try {
    const { params } = req;
    const bebidaId: number = parseInt(params.id);
    const bebida: BebidaInterface | null = await obtenerBebidaPorId(bebidaId);
    res.status(200).send(bebida);
  } catch (e) {
    handleHttp(res, "Error_getBebida");
  }
};

const getBebidasFiltradas = async (req: RequestExt, res: Response) => {
  try {
    const { body } = req;
    const { tipo, habilitado, nombre } = body;
    const bebidas: BebidaInterface[] = await obtenerBebidasConFiltros(tipo, habilitado, nombre);
    res.status(200).send(bebidas);
  } catch (e) {
    handleHttp(res, "Error_getBebida");
  }
};

const postBebida = async (req: RequestExt, res: Response) => {
  try {
    const { body } = req;
    const nuevaBebida: BebidaInterface = body;
    const responseBebida = await crearBebida(nuevaBebida);
    res.status(201).send(responseBebida);
  } catch (e) {
    handleHttp(res, "Error_postBebida");
  }
};

const putBebida = async (req: RequestExt, res: Response) => {
  try {
    const { body } = req;
    const bebidaId: number = body.id;
    const datosActualizados: BebidaInterface = body;
    const responseBebida = await actualizarBebida(bebidaId, datosActualizados);
    res.status(204).send(responseBebida);
  } catch (e) {
    handleHttp(res, "Error_putBebida");
  }
};

const putHabilitarDeshabilitarBebida = async (req: RequestExt, res: Response) => {
  try {
    const { body } = req;
    const bebidaId: number = body.id;
    const habilitado: boolean = body.habilitado;
    const responseBebida = await habilitarDeshabilitarBebida(bebidaId, habilitado);
    res.status(204).send(responseBebida);
  } catch (e) {
    handleHttp(res, "Error_putBebida");
  }
};

const deleteBebida = async (req: RequestExt, res: Response) => {
  try {
    const { body } = req;
    const bebidaId: number = body.id;
    const responseBebida = await eliminarBebida(bebidaId);
    res.status(204).send(responseBebida);
  } catch (e) {
    handleHttp(res, "Error_deleteBebida");
  }
};

export {
  getBebidas,
  getBebidaByID,
  getBebidasFiltradas,
  postBebida,
  putBebida,
  putHabilitarDeshabilitarBebida,
  deleteBebida,
};
