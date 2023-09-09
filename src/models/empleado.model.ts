import { DataTypes, Model } from "sequelize";
import sequelize from "../config/mysql.config";
import { EmpleadoInterface } from "../interfaces/empleado.interface";
import TipoDocumento from "./tipoDocumento.model";
import TipoRol from "./tipoRol.model";

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
    tableName: "empleados",
    timestamps: true,
    createdAt: "fecha_creacion",
    updatedAt: "fecha_actualizacion",
    omitNull: true,
  }
);

Empleado.belongsTo(TipoDocumento, {
  foreignKey: "tipoDocumento",
  as: "documento",
});

Empleado.belongsTo(TipoRol, {
  foreignKey: "rol",
  as: "rolEmpleado",
});

export default Empleado;
