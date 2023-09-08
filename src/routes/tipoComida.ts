import { Router } from "express";
import { logMiddelware } from "../middlewares/log";
import {
  deleteTipoComida,
  getTipoComidasFiltradas,
  postTipoComida,
  putTipoComida,
} from "../controllers/tipoComida";

const router = Router();

router.get("/", logMiddelware, getTipoComidasFiltradas);
router.post("/", postTipoComida);
router.put("/:id", putTipoComida);
router.delete("/:id", deleteTipoComida);

export { router };
