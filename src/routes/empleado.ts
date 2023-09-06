import { Request, Response, Router } from "express";
import { logMiddelware } from "../middlewares/log";
import {
  deleteEmpleado,
  getEmpleadoByID,
  getEmpleadosFiltradas,
  putEmpleado,
} from "../controllers/empleado";

const router = Router();

router.get("/", logMiddelware, getEmpleadosFiltradas);
router.get("/:id", getEmpleadoByID);
router.put("/:id", putEmpleado);
router.delete("/:id", deleteEmpleado);

export { router };
