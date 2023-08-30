import { Request, Response } from "express";
import { handleHttp } from "../utils/error";
import {
  actualizarComida,
  borrarComida,
  habilitarDeshabilitarComida,
  insertarComida,
  obtenerComidas,
} from "../services/comida";
import Comida from "../models/comida";

const getComidas = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const comidas: Comida[] = await obtenerComidas(body);
    res.status(200).json(comidas);
  } catch (e) {
    handleHttp(res, "Error_getComidas");
  }
};

const getComida = (req: Request, res: Response) => {
  try {
    const { body } = req;
    res.send(body);
  } catch (e) {
    handleHttp(res, "Error_getComida");
  }
};

const postComida = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const responseComida = await insertarComida(body);
    //@ts-ignore
    if (responseComida !== true) throw Error(responseComida.message);
    res.sendStatus(201);
  } catch (e) {
    handleHttp(res, "Error_postComida");
  }
};

const putComida = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const responseComida = await actualizarComida(body);
    //@ts-ignore
    if (responseComida !== true) throw Error(responseComida.message);
    res.sendStatus(201);
    res.send(body);
  } catch (e) {
    handleHttp(res, "Error_putComida");
  }
};

const putHabilitarDeshabilitarComida = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const responseComida = await habilitarDeshabilitarComida(body);
    //@ts-ignore
    if (responseComida !== true) throw Error(responseComida.message);
    res.sendStatus(201);
    res.send(body);
  } catch (e) {
    handleHttp(res, "Error_putComida");
  }
};

const deleteComida = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const responseComida = await borrarComida(body);
    //@ts-ignore
    if (responseComida !== true) throw Error(responseComida.message);
    res.sendStatus(201);
    res.send(body);
  } catch (e) {
    handleHttp(res, "Error_deleteComida");
  }
};

export {
  getComida,
  getComidas,
  postComida,
  putComida,
  putHabilitarDeshabilitarComida,
  deleteComida,
};
