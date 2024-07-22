import { Request, Response } from "express";
import { clearCookie } from "../../utils/auth.js";

export default async function logoutController(req: Request, res: Response) {
    clearCookie(res);
    res.send("Logged out successfully");
}
