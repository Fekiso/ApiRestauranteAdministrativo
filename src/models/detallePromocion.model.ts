import { DataTypes, Model } from "sequelize";
import sequelize from "../config/mysql.config";
import Bebida from "./bebida.model";
import Comida from "./comida.model";
import Promocion from "./promocion.model";
import { DetallePromocionInterface } from "../interfaces/detallePromocion.interface";

class DetallePromocion
  extends Model<DetallePromocionInterface>
  implements DetallePromocionInterface
{
  id!: number;
  promocion!: number;
  comida!: number;
  bebida!: number;
  cantidad!: number;
}

DetallePromocion.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    promocion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Promocion,
        key: "id",
      },
    },
    comida: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Comida,
        key: "id",
      },
    },
    bebida: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Bebida,
        key: "id",
      },
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
      },
    },
  },
  {
    sequelize,
    modelName: "DetallePromocion",
    tableName: "detalles_promocion",
    timestamps: true,
    createdAt: "fecha_creacion",
    updatedAt: "fecha_actualizacion",
  }
);

DetallePromocion.belongsTo(Comida, {
  foreignKey: "comida",
  as: "Comida",
});

DetallePromocion.belongsTo(Bebida, {
  foreignKey: "bebida",
  as: "Bebida",
});

export default DetallePromocion;
