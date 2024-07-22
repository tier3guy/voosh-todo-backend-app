import { Router } from "express";
import signupController from "../controllers/auth/signup.controller.js";
import loginController from "../controllers/auth/login.controller.js";
import logoutController from "../controllers/auth/logout.controller.js";

const router = Router();

router.post("/signup", signupController);
router.post("/login", loginController);
router.post("/logout", logoutController);

export default router;
