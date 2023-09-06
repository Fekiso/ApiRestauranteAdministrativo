import { Request, Response, Router } from "express";
import { logMiddelware } from "../middlewares/log";
import {
  deleteTipoBebida,
  getTipoBebidasFiltradas,
  postTipoBebida,
  putTipoBebida,
} from "../controllers/tipoBebida";

const router = Router();

router.get("/", logMiddelware, getTipoBebidasFiltradas);
router.post("/", postTipoBebida);
router.put("/:id", putTipoBebida);
router.delete("/:id", deleteTipoBebida);

export { router };
