import { Router } from "express";

import {
  deleteTipoDocumento,
  getTipoDocumentosFiltradas,
  postTipoDocumento,
  putTipoDocumento,
} from "../controllers/tipoDocumento.controller";

const router = Router();

router.get("/", getTipoDocumentosFiltradas);
router.post("/", postTipoDocumento);
router.put("/:id", putTipoDocumento);
router.delete("/:id", deleteTipoDocumento);

export { router };
