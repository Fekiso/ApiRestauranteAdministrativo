import "dotenv/config";
import express from "express";
import cors from "cors";
import db from "./config/mysql";
import { router } from "./routes";
import sequelize from "./config/mysql";

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(express.json());

app.use(router);

app.listen(PORT, async () => {
  try {
    console.log(`✔ Aplicacion ejecutandose en el puerto: ${PORT}`);
    // await sequelize.sync({ force: true });
    // console.log(`✔ Api sincronizada exitosamente a la base de datos`);
  } catch (e) {
    console.log(e);
  }
});
