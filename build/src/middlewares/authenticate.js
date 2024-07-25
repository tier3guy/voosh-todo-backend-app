import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../constants.js";
export default async function authenticate(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).send("Access denied. No token provided.");
    }
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch (ex) {
        res.status(400).send("Invalid token.");
    }
}
//# sourceMappingURL=authenticate.js.map