import "dotenv/config";
import { Sequelize } from "sequelize";

//@ts-ignore
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: "mysql",
});

export default sequelize;
