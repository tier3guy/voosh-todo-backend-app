import { clearCookie } from "../../utils/auth.js";
export default async function loginController(req, res) {
    clearCookie(res);
    res.send("Logged out successfully");
}
//# sourceMappingURL=logout.controller.js.map