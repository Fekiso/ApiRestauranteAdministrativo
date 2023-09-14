import { DataTypes, Model } from "sequelize";
import sequelize from "../config/mysql.config";
import Bebida from "./bebida.model";
import Comida from "./comida.model";
import Factura from "./promocion.model";
import Promocion from "./promocion.model";
import { DetalleFacturaInterface } from "../interfaces/detalleFactura.interface";

class DetalleFactura extends Model<DetalleFacturaInterface> implements DetalleFacturaInterface {
  id!: number;
  factura!: number;
  promocion!: number;
  comida!: number;
  bebida!: number;
  nombreProducto!: string;
  cantidad!: number;
  precio!: number;
}

DetalleFactura.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    factura: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Factura,
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
    nombreProducto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    precio: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "DetalleFactura",
    tableName: "detalles_factura",
    timestamps: true,
    createdAt: "fecha_creacion",
    updatedAt: "fecha_actualizacion",
  }
);
DetalleFactura.belongsTo(Factura, {
  foreignKey: "factura",
  as: "Factura",
});

DetalleFactura.belongsTo(Comida, {
  foreignKey: "comida",
  as: "Comida",
});

DetalleFactura.belongsTo(Bebida, {
  foreignKey: "bebida",
  as: "Bebida",
});

DetalleFactura.belongsTo(Promocion, {
  foreignKey: "promocion",
  as: "Promocion",
});

export default DetalleFactura;
