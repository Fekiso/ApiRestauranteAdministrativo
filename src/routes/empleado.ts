import { Router } from "express";

import {
  deleteEmpleado,
  getEmpleadoByID,
  getEmpleadosFiltradas,
  putEmpleado,
} from "../controllers/empleado.controller";

const router = Router();

router.get("/", getEmpleadosFiltradas);
router.get("/:id", getEmpleadoByID);
router.put("/:id", putEmpleado);
router.delete("/:id", deleteEmpleado);

export { router };
