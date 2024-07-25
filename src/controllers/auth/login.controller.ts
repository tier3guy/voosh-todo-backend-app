import { Request, Response } from "express";
import { comparePassword, generateToken } from "../../utils/auth.js";
import User from "../../models/users.model.js";

export default async function loginController(req: Request, res: Response) {
    try {
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

        res.status(200).json({
            auth_token: token,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error");
    }
}
