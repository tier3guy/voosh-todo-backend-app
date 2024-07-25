import { Router } from "express";
import signupController from "../controllers/auth/signup.controller.js";
import loginController from "../controllers/auth/login.controller.js";
import logoutController from "../controllers/auth/logout.controller.js";
import googleLoginController from "../controllers/auth/google-login.controller.js";

const router = Router();

router.post("/signup", signupController);
router.post("/login", loginController);
router.post("/google-login", googleLoginController);
router.post("/logout", logoutController);

export default router;
