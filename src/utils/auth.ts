import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Response } from "express";

import { COOKIE_NAME, JWT_SECRET } from "../../constants.js";

export const generateToken = (userId: string): string => {
    return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: "1h" });
};

export const hashPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

export const comparePassword = async (
    password: string,
    hashedPassword: string
): Promise<boolean> => {
    return bcrypt.compare(password, hashedPassword);
};

export const setCookie = (res: Response, token: string): void => {
    const oneDayFromNow = new Date(Date.now() + 24 * 60 * 60 * 1000);

    res.cookie(COOKIE_NAME, token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        expires: oneDayFromNow,
    });
};

export const clearCookie = (res: Response): void => {
    res.clearCookie(COOKIE_NAME);
};
