import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { COOKIE_NAME, JWT_SECRET } from "../../constants.js";
export const generateToken = (userId) => {
    return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: "24h" });
};
export const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};
export const comparePassword = async (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
};
export const setCookie = (res, token) => {
    const oneDayFromNow = new Date(Date.now() + 24 * 60 * 60 * 1000);
    res.cookie(COOKIE_NAME, token, {
        httpOnly: true,
        expires: oneDayFromNow,
    });
};
export const clearCookie = (res) => {
    res.clearCookie(COOKIE_NAME);
};
//# sourceMappingURL=auth.js.map