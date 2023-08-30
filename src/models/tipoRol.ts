import { DataTypes, Model } from "sequelize";
import sequelize from "../config/mysql"; // Importa la conexión a la base de datos
import { TipoRolInterface } from "../interfaces/auxiliares";

class TipoRol extends Model<TipoRolInterface> implements TipoRol {
  id!: number;
  nombre!: string;
  descripcion!: string;
  habilitado!: boolean;
  fecha_creacion!: string;
  fecha_update!: string;
}

TipoRol.init(
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
    modelName: "TipoRol",
    tableName: "tipos_rol", // Nombre de la tabla en la base de datos
    timestamps: false, // Deshabilita los campos de fecha de creación y actualización automáticos
  }
);

export default TipoRol;
