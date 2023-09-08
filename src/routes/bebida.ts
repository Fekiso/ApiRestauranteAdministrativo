import { Router } from "express";
import { logMiddelware } from "../middlewares/log";
import {
  deleteBebida,
  getBebidaByID,
  getBebidasFiltradas,
  postBebida,
  putBebida,
} from "../controllers/bebida";

const router = Router();

router.get("/", logMiddelware, getBebidasFiltradas);
router.get("/:id", getBebidaByID);
router.post("/", postBebida);
router.put("/:id", putBebida);
router.delete("/:id", deleteBebida);

export { router };
