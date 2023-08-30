import { DataTypes, Model } from "sequelize";
import sequelize from "../config/mysql"; // Importa la conexión a la base de datos
import { TipoComidaInterface } from "../interfaces/auxiliares";

class TipoComida extends Model<TipoComidaInterface> implements TipoComida {
  id!: number;
  nombre!: string;
  descripcion!: string;
  habilitado!: boolean;
  fecha_creacion!: string;
  fecha_update!: string;
}

TipoComida.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrementIdentity: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
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
    modelName: "TipoComida",
    tableName: "tipos_comida", // Nombre de la tabla en la base de datos
    timestamps: false, // Deshabilita los campos de fecha de creación y actualización automáticos
  }
);

export default TipoComida;
