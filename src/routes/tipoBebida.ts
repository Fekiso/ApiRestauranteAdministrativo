import { Router } from "express";

import {
  deleteTipoBebida,
  getTipoBebidasFiltradas,
  postTipoBebida,
  putTipoBebida,
} from "../controllers/tipoBebida.controller";

const router = Router();

router.get("/", getTipoBebidasFiltradas);
router.post("/", postTipoBebida);
router.put("/:id", putTipoBebida);
router.delete("/:id", deleteTipoBebida);

export { router };
