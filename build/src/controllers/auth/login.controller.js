import { comparePassword, generateToken, setCookie } from "../../utils/auth.js";
import { users } from "../../../constants.js";
export default async function loginController(req, res) {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).send("Username and password are required");
    }
    const user = users[username];
    if (!user) {
        return res.status(401).send("Invalid credentials");
    }
    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).send("Invalid credentials");
    }
    const token = generateToken(user.id);
    setCookie(res, token);
    res.send("Logged in successfully");
}
//# sourceMappingURL=login.controller.js.map