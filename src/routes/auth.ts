import { Router } from "express";
import { postLogin, postRegistrar } from "../controllers/auth";
const router = Router();

router.post("/register", postRegistrar);
router.post("/login", postLogin);

export { router };
