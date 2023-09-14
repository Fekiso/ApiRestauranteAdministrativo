import { DataTypes, Model } from "sequelize";
import sequelize from "../config/mysql.config";
import { PromocionInterface } from "../interfaces/promocion.interface";
import DetallePromocion from "./detallePromocion.model";

class Promocion extends Model<PromocionInterface> implements PromocionInterface {
  id!: number;
  nombre!: string;
  descripcion!: string;
  precio!: number;
  fechaInicio!: string; // Se asume que este es un string en formato "YYYY-MM-DD"
  fechaFin!: string; // Se asume que este es un string en formato "YYYY-MM-DD"
  horaInicio!: string; // Se asume que este es un string en formato "HH:MM:SS"
  horaFin!: string; // Se asume que este es un string en formato "HH:MM:SS"
  validoLunes!: boolean;
  validoMartes!: boolean;
  validoMiercoles!: boolean;
  validoJueves!: boolean;
  validoViernes!: boolean;
  validoSabado!: boolean;
  validoDomingo!: boolean;
  habilitado!: boolean;
}

Promocion.init(
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
    precio: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    fechaInicio: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    fechaFin: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    horaInicio: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    horaFin: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    validoLunes: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    validoMartes: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    validoMiercoles: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    validoJueves: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    validoViernes: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    validoSabado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    validoDomingo: {
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
    modelName: "Promocion",
    tableName: "promocions",
    timestamps: true,
    createdAt: "fecha_creacion",
    updatedAt: "fecha_actualizacion",
  }
);

Promocion.hasMany(DetallePromocion, {
  foreignKey: "promocion",
  as: "DetallesPromocion",
});

export default Promocion;
