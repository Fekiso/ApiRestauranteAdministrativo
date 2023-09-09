import { DataTypes, Model } from "sequelize";
import sequelize from "../config/mysql.config";
import { TipoComidaInterface } from "../interfaces/tipo.interface";

class TipoComida extends Model<TipoComidaInterface> implements TipoComida {
  id!: number;
  nombre!: string;
  descripcion!: string;
  habilitado!: boolean;
}

TipoComida.init(
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
    modelName: "TipoComida",
    tableName: "tipos_comida",
    timestamps: true,
    createdAt: "fecha_creacion",
    updatedAt: "fecha_actualizacion",
  }
);

export default TipoComida;
