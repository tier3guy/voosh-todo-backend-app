import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { COOKIE_NAME, JWT_SECRET } from "../../constants.js";
import { IJwtPayload } from "../interfaces/index.js";

export default async function authenticate(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const token = req.cookies[COOKIE_NAME];

    if (!token) {
        return res.status(401).send("Access denied. No token provided.");
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as IJwtPayload;
        req.user = decoded;
        next();
    } catch (ex) {
        res.status(400).send("Invalid token.");
    }
}
