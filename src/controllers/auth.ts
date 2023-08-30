import { Request, Response } from "express";
import { handleHttp } from "../utils/error";
import { loginUsuario, registrarNuevoUsuario } from "../services/auth";

const postRegistrar = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const responseUser = await registrarNuevoUsuario(body);
    res.sendStatus(201);
  } catch (e) {
    handleHttp(res, "Error_postComida");
  }
};

const postLogin = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const responseUser = await loginUsuario(body);
    res.sendStatus(201);
  } catch (e) {
    handleHttp(res, "Error_postComida");
  }
};

export { postRegistrar, postLogin };
