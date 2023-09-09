import { Router } from "express";
import {
  deleteComida,
  getComidaByID,
  getComidas,
  getComidasFiltradas,
  postComida,
  putComida,
} from "../controllers/comida.controller";

const router = Router();

router.get("/", getComidasFiltradas);
router.get("/:id", getComidaByID);
router.post("/", postComida);
router.put("/:id", putComida);
router.delete("/:id", deleteComida);

export { router };
