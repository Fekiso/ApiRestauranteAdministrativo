import { Router } from "express";
import { logMiddelware } from "../middlewares/log";
import {
  deleteTipoDocumento,
  getTipoDocumentosFiltradas,
  postTipoDocumento,
  putTipoDocumento,
} from "../controllers/tipoDocumento";

const router = Router();

router.get("/", logMiddelware, getTipoDocumentosFiltradas);
router.post("/", postTipoDocumento);
router.put("/:id", putTipoDocumento);
router.delete("/:id", deleteTipoDocumento);

export { router };
