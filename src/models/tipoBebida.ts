import { DataTypes, Model } from "sequelize";
import sequelize from "../config/mysql"; // Importa la conexión a la base de datos
import { TipoBebidaInterface } from "../interfaces/auxiliares";

class TipoBebida extends Model<TipoBebidaInterface> implements TipoBebida {
  id!: number;
  nombre!: string;
  descripcion!: string;
  habilitado!: boolean;
}

TipoBebida.init(
  {
    id: {
      type: DataTypes.TINYINT({ length: 1 }),
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
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
    modelName: "TipoBebida",
    tableName: "tipos_bebida", // Nombre de la tabla en la base de datos
    timestamps: true,
    createdAt: "fecha_creacion",
    updatedAt: "fecha_actualizacion",
  }
);

export default TipoBebida;
