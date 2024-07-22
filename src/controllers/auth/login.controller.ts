import { Request, Response } from "express";
import { comparePassword, generateToken, setCookie } from "../../utils/auth.js";
import User from "../../models/users.model.js";

export default async function loginController(req: Request, res: Response) {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).send("Username and password are required");
    }

    const user = await User.findOne({ email });
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
