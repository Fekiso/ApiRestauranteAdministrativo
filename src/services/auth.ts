import { AuthInterface } from "../interfaces/auth";

const registrarNuevoUsuario = async (authUser: AuthInterface) => {
  try {
    return true; // 201 Created
  } catch (error) {
    return error;
  }
};

const loginUsuario = async (authUser: AuthInterface) => {
  try {
    return true; // 201 Created
  } catch (error) {
    return error;
  }
};

export { registrarNuevoUsuario, loginUsuario };
