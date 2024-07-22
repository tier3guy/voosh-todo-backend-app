import { Router } from "express";
import signupController from "../controllers/auth/signup.controller.js";
import loginController from "../controllers/auth/login.controller.js";
const router = Router();
router.post("/signup", signupController);
router.post("/login", loginController);
router.post("/logout", loginController);
export default router;
//# sourceMappingURL=auth.js.map