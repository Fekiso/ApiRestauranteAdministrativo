import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { TipoDocumentoInterface } from "../interfaces/auxiliares";
import {
  actualizarTipoDocumento,
  crearTipoDocumento,
  eliminarTipoDocumento,
  obtenerTipoDocumentoConFiltro,
  obtenerTodosLosTipoDocumento,
} from "../services/tipoDocumento";

const getTipoDocumentos = async (req: Request, res: Response) => {
  try {
    const tipoDocumentos: TipoDocumentoInterface[] = await obtenerTodosLosTipoDocumento();
    res.status(200).json(tipoDocumentos);
  } catch (e) {
    handleHttp(res, "Error_getTipoDocumentos");
  }
};

const getTipoDocumentosFiltradas = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const { tipo, habilitado } = body;
    const tipoDocumentos: TipoDocumentoInterface[] = await obtenerTipoDocumentoConFiltro(
      tipo,
      habilitado
    );
    res.status(200).send(tipoDocumentos);
  } catch (e) {
    handleHttp(res, "Error_getTipoDocumento");
  }
};

const postTipoDocumento = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const nuevaTipoDocumento: TipoDocumentoInterface = body;
    const responseTipoDocumento = await crearTipoDocumento(nuevaTipoDocumento);
    res.status(201).send(responseTipoDocumento);
  } catch (e) {
    handleHttp(res, "Error_postTipoDocumento");
  }
};

const putTipoDocumento = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const tipoDocumentoId: number = body.id;
    const datosActualizados: TipoDocumentoInterface = body;
    const responseTipoDocumento = await actualizarTipoDocumento(tipoDocumentoId, datosActualizados);
    res.status(204).send(responseTipoDocumento);
  } catch (e) {
    handleHttp(res, "Error_putTipoDocumento");
  }
};

const deleteTipoDocumento = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const tipoDocumentoId: number = body.id;
    const responseTipoDocumento = await eliminarTipoDocumento(tipoDocumentoId);
    res.status(204).send(responseTipoDocumento);
  } catch (e) {
    handleHttp(res, "Error_deleteTipoDocumento");
  }
};

export {
  getTipoDocumentos,
  getTipoDocumentosFiltradas,
  postTipoDocumento,
  putTipoDocumento,
  deleteTipoDocumento,
};
