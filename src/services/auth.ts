import { Op } from "sequelize";
import { AuthType, EmpleadoInterface } from "../interfaces/empleado";
import Empleado from "../models/empleado";
import { encriptar, verificar } from "../utils/bcrypt.handle";

const registrarNuevoUsuario = async (
  nuevoEmpleado: EmpleadoInterface
): Promise<EmpleadoInterface> => {
  try {
    const usuarioExistente = await Empleado.findOne({
      where: {
        [Op.or]: [{ user: nuevoEmpleado.user }, { nroDocumento: nuevoEmpleado.nroDocumento }],
      },
    });
    console.log(usuarioExistente);
    if (usuarioExistente) throw new Error("Empleado ya existente");
    else {
      nuevoEmpleado.pass = await encriptar(nuevoEmpleado.pass);
      console.log(nuevoEmpleado);
      const empleadoCreado: EmpleadoInterface = await Empleado.create(nuevoEmpleado);
      return empleadoCreado;
    }
  } catch (error) {
    console.log(error);
    throw new Error("Error al crear al nuevo empleado");
  }
};

const loginUsuario = async (authUser: AuthType) => {
  try {
    const usuarioExistente = await Empleado.findOne({
      where: { user: authUser.user },
    });
    if (!usuarioExistente) throw new Error("Credenciales incorrectas");
    else {
      const loginValido = await verificar(authUser.pass, usuarioExistente.pass);
      if (loginValido) return usuarioExistente;
      else throw new Error("Credenciales incorrectas");
    }
  } catch (error) {
    return error;
  }
};

export { registrarNuevoUsuario, loginUsuario };
