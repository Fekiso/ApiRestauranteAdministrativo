import { DataTypes, Model } from "sequelize";
import sequelize from "../config/mysql"; // Importa la conexión a la base de datos
import { EmpleadoInterface } from "../interfaces/empleado";

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
  fecha_creacion!: string;
  fecha_update!: string;
}

Empleado.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrementIdentity: true,
      allowNull: false,
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
      type: DataTypes.NUMBER,
      allowNull: false,
      defaultValue: 1,
    },
    nroDocumento: {
      type: DataTypes.NUMBER,
      unique: true,
      allowNull: false,
    },
    rol: {
      type: DataTypes.NUMBER,
      allowNull: false,
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
    fecha_creacion: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    fecha_update: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Empleado",
    tableName: "empleado", // Nombre de la tabla en la base de datos
    timestamps: false, // Deshabilita los campos de fecha de creación y actualización automáticos
  }
);

export default Empleado;
