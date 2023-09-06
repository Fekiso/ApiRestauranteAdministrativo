import { DataTypes, Model } from "sequelize";
import sequelize from "../config/mysql"; // Importa la conexión a la base de datos
import { ComidaInterface } from "../interfaces/comida";
import TipoComida from "./tipoComida";

class Comida extends Model<ComidaInterface> implements Comida {
  id!: number;
  nombre!: string;
  descripcion!: string;
  tipo!: number;
  precio!: number;
  habilitado!: boolean;
}

Comida.init(
  {
    id: {
      type: DataTypes.INTEGER,
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
    tipo: {
      type: DataTypes.TINYINT({ length: 1 }),
      allowNull: false,
      references: {
        model: TipoComida,
        key: "id",
      },
    },
    precio: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    habilitado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    sequelize,
    modelName: "Comida",
    tableName: "comidas", // Nombre de la tabla en la base de datos
    timestamps: true,
    createdAt: "fecha_creacion",
    updatedAt: "fecha_actualizacion",
  }
);

export default Comida;
