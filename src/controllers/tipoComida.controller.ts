import { Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { TipoComidaInterface } from "../interfaces/tipo.interface";
import {
  actualizarTipoComida,
  crearTipoComida,
  eliminarTipoComida,
  obtenerTipoComidaConFiltro,
  obtenerTodosLosTiposComida,
} from "../services/tipoComida";
import { RequestExt } from "../interfaces/request.interface";

const getTipoComidas = async (req: RequestExt, res: Response) => {
  try {
    const tipoComidas: TipoComidaInterface[] = await obtenerTodosLosTiposComida();
    res.status(200).json(tipoComidas);
  } catch (e) {
    handleHttp(res, "Error_getTipoComidas");
  }
};

const getTipoComidasFiltradas = async (req: RequestExt, res: Response) => {
  try {
    const { body } = req;
    const { tipo, habilitado } = body;
    const tipoComidas: TipoComidaInterface[] = await obtenerTipoComidaConFiltro(tipo, habilitado);
    res.status(200).send(tipoComidas);
  } catch (e) {
    handleHttp(res, "Error_getTipoComida");
  }
};

const postTipoComida = async (req: RequestExt, res: Response) => {
  try {
    const { body } = req;
    const nuevaTipoComida: TipoComidaInterface = body;
    const responseTipoComida = await crearTipoComida(nuevaTipoComida);
    res.status(201).send(responseTipoComida);
  } catch (e) {
    handleHttp(res, "Error_postTipoComida");
  }
};

const putTipoComida = async (req: RequestExt, res: Response) => {
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

const deleteTipoComida = async (req: RequestExt, res: Response) => {
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
