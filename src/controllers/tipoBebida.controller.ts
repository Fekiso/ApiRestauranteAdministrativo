import { Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { TipoBebidaInterface } from "../interfaces/auxiliares.interface";
import {
  actualizarTipoBebida,
  crearTipoBebida,
  eliminarTipoBebida,
  obtenerTipoBebidaConFiltro,
  obtenerTodosLosTiposBebida,
} from "../services/tipoBebida";
import { RequestExt } from "../interfaces/request.interface";

const getTipoBebidas = async (req: RequestExt, res: Response) => {
  try {
    const tipoBebidas: TipoBebidaInterface[] = await obtenerTodosLosTiposBebida();
    res.status(200).json(tipoBebidas);
  } catch (e) {
    handleHttp(res, "Error_getTipoBebidas");
  }
};

const getTipoBebidasFiltradas = async (req: RequestExt, res: Response) => {
  try {
    const { body } = req;
    const { tipo, habilitado } = body;
    const tipoBebidas: TipoBebidaInterface[] = await obtenerTipoBebidaConFiltro(tipo, habilitado);
    res.status(200).send(tipoBebidas);
  } catch (e) {
    handleHttp(res, "Error_getTipoBebida");
  }
};

const postTipoBebida = async (req: RequestExt, res: Response) => {
  try {
    const { body } = req;
    const nuevaTipoBebida: TipoBebidaInterface = body;
    const responseTipoBebida = await crearTipoBebida(nuevaTipoBebida);
    res.status(201).send(responseTipoBebida);
  } catch (e) {
    handleHttp(res, "Error_postTipoBebida");
  }
};

const putTipoBebida = async (req: RequestExt, res: Response) => {
  try {
    const { body } = req;
    const tipoBebidaId: number = body.id;
    const datosActualizados: TipoBebidaInterface = body;
    const responseTipoBebida = await actualizarTipoBebida(tipoBebidaId, datosActualizados);
    res.status(204).send(responseTipoBebida);
  } catch (e) {
    handleHttp(res, "Error_putTipoBebida");
  }
};

const deleteTipoBebida = async (req: RequestExt, res: Response) => {
  try {
    const { body } = req;
    const tipoBebidaId: number = body.id;
    const responseTipoBebida = await eliminarTipoBebida(tipoBebidaId);
    res.status(204).send(responseTipoBebida);
  } catch (e) {
    handleHttp(res, "Error_deleteTipoBebida");
  }
};

export { getTipoBebidas, getTipoBebidasFiltradas, postTipoBebida, putTipoBebida, deleteTipoBebida };
