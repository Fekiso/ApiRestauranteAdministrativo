import { Router } from "express";

import {
  deleteTipoRol,
  getTipoRolsFiltradas,
  postTipoRol,
  putTipoRol,
} from "../controllers/tipoRol.controller";

const router = Router();

router.get("/", getTipoRolsFiltradas);
router.post("/", postTipoRol);
router.put("/:id", putTipoRol);
router.delete("/:id", deleteTipoRol);

export { router };
