import { DataTypes, Model } from "sequelize";
import sequelize from "../config/mysql.config";
import Bebida from "./bebida.model";
import Comida from "./comida.model";
import Carta from "./promocion.model";
import { DetalleCartaInterface } from "../interfaces/detalleCarta.interface";
import Promocion from "./promocion.model";

class DetalleCarta extends Model<DetalleCartaInterface> implements DetalleCartaInterface {
  id!: number;
  carta!: number;
  promocion!: number;
  comida!: number;
  bebida!: number;
}

DetalleCarta.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    carta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Carta,
        key: "id",
      },
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
  },
  {
    sequelize,
    modelName: "DetalleCarta",
    tableName: "detalles_carta",
    timestamps: true,
    createdAt: "fecha_creacion",
    updatedAt: "fecha_actualizacion",
  }
);

DetalleCarta.belongsTo(Comida, {
  foreignKey: "comida",
  as: "Comida",
});

DetalleCarta.belongsTo(Bebida, {
  foreignKey: "bebida",
  as: "Bebida",
});

DetalleCarta.belongsTo(Promocion, {
  foreignKey: "promocion",
  as: "Promocion",
});

export default DetalleCarta;
