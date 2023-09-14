import { DataTypes, Model } from "sequelize";
import sequelize from "../config/mysql.config";
import { PedidoInterface } from "../interfaces/pedido.interface";
import DetallePedido from "./detallePedido.model";
import Empleado from "./empleado.model";
import Mesa from "./mesa.model";
import TipoEstadoPedido from "./tipoEstadoPedido.model";

class Pedido extends Model<PedidoInterface> implements PedidoInterface {
  id!: number;
  valida!: boolean;
  estado!: number;
  mesa!: number;
  empleadoAtiende!: number;
}

Pedido.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    valida: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    mesa: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    empleadoAtiende: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Pedido",
    tableName: "pedidos",
    timestamps: true,
    createdAt: "fecha_creacion",
    updatedAt: "fecha_actualizacion",
  }
);

Pedido.hasMany(DetallePedido, {
  foreignKey: "pedido",
  as: "DetallesPedido",
});

Pedido.belongsTo(Empleado, {
  foreignKey: "empleadoAtiende",
  as: "EmpleadoAtiende",
});

Pedido.belongsTo(Mesa, {
  foreignKey: "mesa",
  as: "Mesa",
});

Pedido.belongsTo(TipoEstadoPedido, {
  foreignKey: "estado",
  as: "EstadoPedido",
});

export default Pedido;
