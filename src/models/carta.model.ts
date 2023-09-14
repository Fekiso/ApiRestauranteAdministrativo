import { DataTypes, Model } from "sequelize";
import sequelize from "../config/mysql.config";
import { CartaInterface } from "../interfaces/carta.interface";
import DetalleCarta from "./detalleCarta.model";

class Carta extends Model<CartaInterface> implements CartaInterface {
  id!: number;
  nombre!: string;
  descripcion!: string;
  fechaInicioValidez!: string; // Se asume que este es un string en formato "YYYY-MM-DD"
  fechaFinValidez!: string; // Se asume que este es un string en formato "YYYY-MM-DD"
  valida!: boolean;
  habilitado!: boolean;
}

Carta.init(
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
      allowNull: false,
    },
    fechaInicioValidez: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    fechaFinValidez: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    valida: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    habilitado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Carta",
    tableName: "cartas",
    timestamps: true,
    createdAt: "fecha_creacion",
    updatedAt: "fecha_actualizacion",
  }
);

Carta.hasMany(DetalleCarta, {
  foreignKey: "carta",
  as: "DetallesCarta",
});

export default Carta;
