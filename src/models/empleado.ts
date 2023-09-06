import { DataTypes, Model } from "sequelize";
import sequelize from "../config/mysql"; // Importa la conexión a la base de datos
import { EmpleadoInterface } from "../interfaces/empleado";
import TipoDocumento from "./tipoDocumento";
import TipoRol from "./tipoRol";

class Empleado extends Model<EmpleadoInterface> implements Empleado {
  id!: number;
  user!: string;
  pass!: string;
  nombre!: string;
  apellido!: string;
  tipoDocumento!: number;
  nroDocumento!: number;
  rol!: number;
  telefono!: string;
  email!: string;
  habilitado!: boolean;
}

Empleado.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    pass: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipoDocumento: {
      type: DataTypes.TINYINT({ length: 1 }),
      allowNull: false,
      references: {
        model: TipoDocumento,
        key: "id",
      },
    },
    nroDocumento: {
      type: DataTypes.DECIMAL(9, 0),
      unique: true,
      allowNull: false,
    },
    rol: {
      type: DataTypes.TINYINT({ length: 1 }),
      allowNull: false,
      references: {
        model: TipoRol,
        key: "id",
      },
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    habilitado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    sequelize,
    modelName: "Empleado",
    tableName: "empleados", // Nombre de la tabla en la base de datos
    timestamps: true,
    createdAt: "fecha_creacion",
    updatedAt: "fecha_actualizacion",
    omitNull: true, // Evita que se inserten valores nulos en las columnas omitidas
  }
);

export default Empleado;
