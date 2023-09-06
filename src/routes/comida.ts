import { Request, Response, Router } from "express";
import { logMiddelware } from "../middlewares/log";
import {
  deleteComida,
  getComidaByID,
  getComidas,
  getComidasFiltradas,
  postComida,
  putComida,
} from "../controllers/comida";

const router = Router();

router.get("/", logMiddelware, getComidasFiltradas);
router.get("/:id", getComidaByID);
router.post("/", postComida);
router.put("/:id", putComida);
router.delete("/:id", deleteComida);

export { router };
