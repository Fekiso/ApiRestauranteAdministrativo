import { Request, Response, Router } from "express";
import { deleteComida, getComida, getComidas, postComida, putComida } from "../controllers/comida";
import { logMiddelware } from "../middlewares/log";

const router = Router();

router.get("/", logMiddelware, getComidas);
router.get("/:id", getComida);
router.post("/", postComida);
router.put("/:id", putComida);
router.delete("/:id", deleteComida);

export { router };
