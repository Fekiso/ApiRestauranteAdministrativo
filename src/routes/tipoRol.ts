import { Request, Response, Router } from "express";
import { logMiddelware } from "../middlewares/log";
import {
  deleteTipoRol,
  getTipoRolsFiltradas,
  postTipoRol,
  putTipoRol,
} from "../controllers/tipoRol";

const router = Router();

router.get("/", logMiddelware, getTipoRolsFiltradas);
router.post("/", postTipoRol);
router.put("/:id", putTipoRol);
router.delete("/:id", deleteTipoRol);

export { router };
