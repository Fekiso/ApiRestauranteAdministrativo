import { Router } from "express";

import {
  deleteTipoComida,
  getTipoComidasFiltradas,
  postTipoComida,
  putTipoComida,
} from "../controllers/tipoComida.controller";

const router = Router();

router.get("/", getTipoComidasFiltradas);
router.post("/", postTipoComida);
router.put("/:id", putTipoComida);
router.delete("/:id", deleteTipoComida);

export { router };
