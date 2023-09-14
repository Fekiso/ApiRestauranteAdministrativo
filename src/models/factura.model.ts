import { DataTypes, Model } from "sequelize";
import sequelize from "../config/mysql.config";
import { FacturaInterface } from "../interfaces/factura.interface";
import DetalleFactura from "./detalleFactura.model";
import Empleado from "./empleado.model";
import Mesa from "./mesa.model";
import TipoEstadoFactura from "./tipoEstadoFactura.model";
import TipoPago from "./tipoPago.model";

class Factura extends Model<FacturaInterface> implements FacturaInterface {
  id!: number;
  valida!: boolean;
  estado!: number;
  metodoPago!: number;
  mesa!: number;
  empleadoAtiende!: number;
  empleadoFacturo!: number;
}

Factura.init(
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
    metodoPago: {
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
    empleadoFacturo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Factura",
    tableName: "facturas",
    timestamps: true,
    createdAt: "fecha_creacion",
    updatedAt: "fecha_actualizacion",
  }
);

Factura.hasMany(DetalleFactura, {
  foreignKey: "factura",
  as: "DetallesFactura",
});

Factura.belongsTo(Empleado, {
  foreignKey: "empleadoAtiende",
  as: "EmpleadoAtiende",
});

Factura.belongsTo(Empleado, {
  foreignKey: "empleadoFacturo",
  as: "EmpleadoFacturo",
});

Factura.belongsTo(Mesa, {
  foreignKey: "mesa",
  as: "Mesa",
});

Factura.belongsTo(TipoEstadoFactura, {
  foreignKey: "estado",
  as: "EstadoFactura",
});

Factura.belongsTo(TipoPago, {
  foreignKey: "metodoPago",
  as: "MetodoPago",
});

export default Factura;
