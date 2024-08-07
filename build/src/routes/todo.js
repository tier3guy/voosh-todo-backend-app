import { Router } from "express";
import allController from "../controllers/todo/all.controller.js";
import getController from "../controllers/todo/get.controller.js";
import createController from "../controllers/todo/create.controller.js";
import updateController from "../controllers/todo/update.controller.js";
import deleteController from "../controllers/todo/delete.controller.js";
import updateTaskOrderController from "../controllers/todo/updateTaskOrder.controller.js";
const router = Router();
router.get("/all", allController);
router.get("/:id", getController);
router.post("/create", createController);
router.put("/:id", updateController);
router.put("/all", updateTaskOrderController);
router.delete("/:id", deleteController);
export default router;
//# sourceMappingURL=todo.js.map