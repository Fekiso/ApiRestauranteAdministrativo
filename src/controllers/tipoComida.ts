import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { TipoComidaInterface } from "../interfaces/auxiliares";
import {
  actualizarTipoComida,
  crearTipoComida,
  eliminarTipoComida,
  obtenerTipoComidaConFiltro,
  obtenerTodosLosTiposComida,
} from "../services/tipoComida";

const getTipoComidas = async (req: Request, res: Response) => {
  try {
    const tipoComidas: TipoComidaInterface[] = await obtenerTodosLosTiposComida();
    res.status(200).json(tipoComidas);
  } catch (e) {
    handleHttp(res, "Error_getTipoComidas");
  }
};

const getTipoComidasFiltradas = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const { tipo, habilitado } = body;
    const tipoComidas: TipoComidaInterface[] = await obtenerTipoComidaConFiltro(tipo, habilitado);
    res.status(200).send(tipoComidas);
  } catch (e) {
    handleHttp(res, "Error_getTipoComida");
  }
};

const postTipoComida = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const nuevaTipoComida: TipoComidaInterface = body;
    const responseTipoComida = await crearTipoComida(nuevaTipoComida);
    res.status(201).send(responseTipoComida);
  } catch (e) {
    handleHttp(res, "Error_postTipoComida");
  }
};

const putTipoComida = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const tipoComidaId: number = body.id;
    const datosActualizados: TipoComidaInterface = body;
    const responseTipoComida = await actualizarTipoComida(tipoComidaId, datosActualizados);
    res.status(204).send(responseTipoComida);
  } catch (e) {
    handleHttp(res, "Error_putTipoComida");
  }
};

const deleteTipoComida = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const tipoComidaId: number = body.id;
    const responseTipoComida = await eliminarTipoComida(tipoComidaId);
    res.status(204).send(responseTipoComida);
  } catch (e) {
    handleHttp(res, "Error_deleteTipoComida");
  }
};

export { getTipoComidas, getTipoComidasFiltradas, postTipoComida, putTipoComida, deleteTipoComida };