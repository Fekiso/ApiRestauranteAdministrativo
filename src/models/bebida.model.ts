import { DataTypes, Model } from "sequelize";
import sequelize from "../config/mysql.config";
import { BebidaInterface } from "../interfaces/bebida.interface";
import TipoBebida from "./tipoBebida.model";

class Bebida extends Model<BebidaInterface> implements Bebida {
  id!: number;
  nombre!: string;
  descripcion!: string;
  tipo!: number;
  precio!: number;
  habilitado!: boolean;
}

Bebida.init(
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
        model: TipoBebida,
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
    modelName: "Bebida",
    tableName: "bebidas",
    timestamps: true,
    createdAt: "fecha_creacion",
    updatedAt: "fecha_actualizacion",
  }
);

Bebida.belongsTo(TipoBebida, {
  foreignKey: "tipo",
  as: "tipoBebida",
});

export default Bebida;
