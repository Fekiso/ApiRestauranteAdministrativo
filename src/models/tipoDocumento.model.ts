import { DataTypes, Model } from "sequelize";
import sequelize from "../config/mysql.config";
import { TipoDocumentoInterface } from "../interfaces/auxiliares.interface";

class TipoDocumento extends Model<TipoDocumentoInterface> implements TipoDocumento {
  id!: number;
  nombre!: string;
  descripcion!: string;
  habilitado!: boolean;
}

TipoDocumento.init(
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
    modelName: "TipoDocumento",
    tableName: "tipos_documento",
    timestamps: true,
    createdAt: "fecha_creacion",
    updatedAt: "fecha_actualizacion",
  }
);

export default TipoDocumento;
