import { DataTypes, Model } from "sequelize";
import sequelize from "../config/mysql"; // Importa la conexión a la base de datos
import { BebidaInterface } from "../interfaces/bebida";

class Bebida extends Model<BebidaInterface> implements Bebida {
  id!: number;
  nombre!: string;
  descripcion!: string;
  tipo!: number;
  precio!: number;
  habilitado!: boolean;
  fecha_creacion!: string;
  fecha_update!: string;
}

Bebida.init(
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
    tipo: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    precio: {
      type: DataTypes.NUMBER,
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
    modelName: "Bebida",
    tableName: "bebidas", // Nombre de la tabla en la base de datos
    timestamps: false, // Deshabilita los campos de fecha de creación y actualización automáticos
  }
);

export default Bebida;
