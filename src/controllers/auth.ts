import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { loginUsuario, registrarNuevoUsuario } from "../services/auth";
import { AuthType, EmpleadoInterface } from "../interfaces/empleado.js";

const postRegistrar = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    let NuevoEmpleado: EmpleadoInterface = { ...body };
    const responseUser = await registrarNuevoUsuario(NuevoEmpleado);
    console.log(responseUser);
    res.status(201).json(responseUser);
  } catch (e) {
    //@ts-ignore
    handleHttp(res, e);
  }
};

const postLogin = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    let nuevoLogin: AuthType = { ...body };
    const responseUser = await loginUsuario(nuevoLogin);
    res.status(204).send(responseUser);
  } catch (e) {
    console.log(e);
    handleHttp(res, "Error_postLogin");
  }
};

export { postRegistrar, postLogin };
