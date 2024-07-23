import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { COOKIE_NAME, JWT_SECRET } from "../../constants.js";
export const generateToken = (userId) => {
    return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: "1h" });
};
export const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};
export const comparePassword = async (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
};
export const setCookie = (res, token) => {
    res.cookie(COOKIE_NAME, token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
    });
};
export const clearCookie = (res) => {
    res.clearCookie(COOKIE_NAME);
};
//# sourceMappingURL=auth.js.map