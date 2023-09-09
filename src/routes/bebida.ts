import { Router } from "express";
import {
  deleteBebida,
  getBebidaByID,
  getBebidasFiltradas,
  postBebida,
  putBebida,
} from "../controllers/bebida.controller";

const router = Router();

router.get("/", getBebidasFiltradas);
router.get("/:id", getBebidaByID);
router.post("/", postBebida);
router.put("/:id", putBebida);
router.delete("/:id", deleteBebida);

export { router };
