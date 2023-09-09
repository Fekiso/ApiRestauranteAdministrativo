import "dotenv/config";
import express from "express";
import cors from "cors";
import swaggerUI from "swagger-ui-express";
import { router } from "./routes";
import sequelize from "./config/mysql.config";
import swaggerSetup from "./config/swagger.config";

const PORT = process.env.PORT || null;
const app = express();
app.use(cors());
app.use(express.json());

app.use(router);
app.use("/swagger-documentation", swaggerUI.serve, swaggerUI.setup(swaggerSetup));

if (PORT !== null) {
  app.listen(PORT, async () => {
    try {
      console.log(`✔ Aplicacion ejecutandose en el puerto: ${PORT}`);
      console.log(`✔ Documentacion swagger: http://localhost:${PORT}/swagger-documentation`);
      // await sequelize.sync({ force: true });
      // console.log(`✔ Api sincronizada exitosamente a la base de datos`);
    } catch (e) {
      console.log(e);
    }
  });
} else {
  console.log("❌ No se ha predefinido un puerto para la api");
}
