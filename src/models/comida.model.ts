import { DataTypes, Model } from "sequelize";
import sequelize from "../config/mysql.config";
import { ComidaInterface } from "../interfaces/comida.interface";
import TipoComida from "./tipoComida.model";

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
    tableName: "comidas",
    timestamps: true,
    createdAt: "fecha_creacion",
    updatedAt: "fecha_actualizacion",
  }
);

Comida.belongsTo(TipoComida, {
  foreignKey: "tipo",
  as: "tipoComida",
});

export default Comida;
