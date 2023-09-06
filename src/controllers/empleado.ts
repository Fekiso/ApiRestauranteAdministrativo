import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { EmpleadoInterface } from "../interfaces/empleado";
import {
  actualizarEmpleado,
  eliminarEmpleado,
  habilitarDeshabilitarEmpleado,
  obtenerEmpleadoPorId,
  obtenerEmpleados,
  obtenerEmpleadosConFiltros,
} from "../services/empleado";

const getEmpleados = async (req: Request, res: Response) => {
  try {
    const empleados: EmpleadoInterface[] = await obtenerEmpleados();
    res.status(200).json(empleados);
  } catch (e) {
    handleHttp(res, "Error_getEmpleados");
  }
};

const getEmpleadoByID = async (req: Request, res: Response) => {
  try {
    const { params } = req;
    const empleadoId: number = parseInt(params.id);
    const empleado: EmpleadoInterface | null = await obtenerEmpleadoPorId(empleadoId);
    res.status(200).send(empleado);
  } catch (e) {
    handleHttp(res, "Error_getEmpleado");
  }
};

const getEmpleadosFiltradas = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const { tipo, rol, habilitado, nombre, apellido } = body;
    const empleados: EmpleadoInterface[] = await obtenerEmpleadosConFiltros(
      tipo,
      rol,
      habilitado,
      nombre,
      apellido
    );
    res.status(200).send(empleados);
  } catch (e) {
    handleHttp(res, "Error_getEmpleado");
  }
};

const putEmpleado = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const empleadoId: number = body.id;
    const datosActualizados: EmpleadoInterface = body;
    const responseEmpleado = await actualizarEmpleado(empleadoId, datosActualizados);
    res.status(204).send(responseEmpleado);
  } catch (e) {
    handleHttp(res, "Error_putEmpleado");
  }
};

const putHabilitarDeshabilitarEmpleado = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const empleadoId: number = body.id;
    const habilitado: boolean = body.habilitado;
    const responseEmpleado = await habilitarDeshabilitarEmpleado(empleadoId, habilitado);
    res.status(204).send(responseEmpleado);
  } catch (e) {
    handleHttp(res, "Error_putEmpleado");
  }
};

const deleteEmpleado = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const empleadoId: number = body.id;
    const responseEmpleado = await eliminarEmpleado(empleadoId);
    res.status(204).send(responseEmpleado);
  } catch (e) {
    handleHttp(res, "Error_deleteEmpleado");
  }
};

export {
  getEmpleados,
  getEmpleadoByID,
  getEmpleadosFiltradas,
  putEmpleado,
  putHabilitarDeshabilitarEmpleado,
  deleteEmpleado,
};
