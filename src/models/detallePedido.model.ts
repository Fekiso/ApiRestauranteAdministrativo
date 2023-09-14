import { DataTypes, Model } from "sequelize";
import sequelize from "../config/mysql.config";
import Bebida from "./bebida.model";
import Comida from "./comida.model";
import Pedido from "./promocion.model";
import Promocion from "./promocion.model";
import { DetallePedidoInterface } from "../interfaces/detallePedido.interface";

class DetallePedido extends Model<DetallePedidoInterface> implements DetallePedidoInterface {
  id!: number;
  pedido!: number;
  promocion!: number;
  comida!: number;
  bebida!: number;
  nombreProducto!: string;
  cantidad!: number;
  precio!: number;
}

DetallePedido.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    pedido: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Pedido,
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
    modelName: "DetallePedido",
    tableName: "detalles_pedido",
    timestamps: true,
    createdAt: "fecha_creacion",
    updatedAt: "fecha_actualizacion",
  }
);
DetallePedido.belongsTo(Pedido, {
  foreignKey: "pedido",
  as: "Pedido",
});

DetallePedido.belongsTo(Comida, {
  foreignKey: "comida",
  as: "Comida",
});

DetallePedido.belongsTo(Bebida, {
  foreignKey: "bebida",
  as: "Bebida",
});

DetallePedido.belongsTo(Promocion, {
  foreignKey: "promocion",
  as: "Promocion",
});

export default DetallePedido;
