import { DataTypes, Model } from "sequelize";
import sequelize from "../config/mysql.config";
import { TipoEstadoFacturaInterface } from "../interfaces/tipo.interface";

class TipoEstadoFactura extends Model<TipoEstadoFacturaInterface> implements TipoEstadoFactura {
  id!: number;
  nombre!: string;
  descripcion!: string;
  habilitado!: boolean;
}

TipoEstadoFactura.init(
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
    modelName: "TipoEstadoFactura",
    tableName: "tipos_estado_factura",
    timestamps: true,
    createdAt: "fecha_creacion",
    updatedAt: "fecha_actualizacion",
  }
);

export default TipoEstadoFactura;
