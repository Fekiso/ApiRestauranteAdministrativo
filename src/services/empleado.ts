import { Op } from "sequelize";
import { EmpleadoInterface } from "../interfaces/empleado";
import Empleado from "../models/empleado";

// Obtener todas las empleados
const obtenerEmpleados = async (): Promise<EmpleadoInterface[]> => {
  try {
    const empleados: EmpleadoInterface[] = await Empleado.findAll();
    return empleados;
  } catch (error) {
    throw new Error("Error al obtener empleados");
  }
};

// Obtener una empleado por su ID
const obtenerEmpleadoPorId = async (empleadoId: number): Promise<EmpleadoInterface | null> => {
  try {
    const empleado: EmpleadoInterface | null = await Empleado.findByPk(empleadoId);
    return empleado;
  } catch (error) {
    throw new Error("Error al obtener la empleado por ID");
  }
};

// Obtener empleados con filtros
const obtenerEmpleadosConFiltros = async (
  tipo: number | null,
  rol: number | null,
  habilitado: boolean | null,
  nombre: string | null,
  apellido: string | null
): Promise<EmpleadoInterface[]> => {
  try {
    // Construye la condición de búsqueda basada en los filtros proporcionados
    const condiciones: any = {};
    if (rol !== null && rol) {
      condiciones.rol = rol;
    }
    if (tipo !== null && tipo) {
      condiciones.tipo = tipo;
    }
    if (habilitado !== null && habilitado) {
      condiciones.habilitado = habilitado;
    }
    if (nombre !== null && nombre) {
      condiciones.nombre = { [Op.like]: `%${nombre}%` };
    }
    if (apellido !== null && apellido) {
      condiciones.apellido = { [Op.like]: `%${apellido}%` };
    }

    const empleados: EmpleadoInterface[] = await Empleado.findAll({
      where: condiciones,
    });

    return empleados;
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener empleados con filtros");
  }
};

// Crear una nueva empleado
const crearEmpleado = async (nuevaEmpleado: EmpleadoInterface): Promise<EmpleadoInterface> => {
  try {
    const empleadoCreada: EmpleadoInterface = await Empleado.create(nuevaEmpleado);
    return empleadoCreada;
  } catch (error) {
    throw new Error("Error al crear la empleado");
  }
};

// Actualizar una empleado por su ID
const actualizarEmpleado = async (
  empleadoId: number,
  datosActualizados: EmpleadoInterface
): Promise<number> => {
  try {
    const resultado: [number] = await Empleado.update(datosActualizados, {
      where: { id: empleadoId },
    });
    return resultado[0];
  } catch (error) {
    throw new Error("Error al actualizar la empleado");
  }
};

// habilito una empleado por su ID
const habilitarDeshabilitarEmpleado = async (
  empleadoId: number,
  habilitado: boolean
): Promise<number> => {
  try {
    const resultado: [number] = await Empleado.update(
      { habilitado: habilitado },
      {
        where: { id: empleadoId },
      }
    );
    return resultado[0];
  } catch (error) {
    throw new Error("Error al actualizar la empleado");
  }
};

// Eliminar una empleado por su ID
const eliminarEmpleado = async (empleadoId: number): Promise<number> => {
  try {
    const resultado: number = await Empleado.destroy({
      where: { id: empleadoId },
    });
    return resultado;
  } catch (error) {
    throw new Error("Error al eliminar la empleado");
  }
};

export {
  obtenerEmpleados,
  obtenerEmpleadoPorId,
  obtenerEmpleadosConFiltros,
  crearEmpleado,
  actualizarEmpleado,
  habilitarDeshabilitarEmpleado,
  eliminarEmpleado,
};
