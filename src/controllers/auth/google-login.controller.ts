import { Request, Response } from "express";
import { comparePassword, generateToken } from "../../utils/auth.js";
import User from "../../models/users.model.js";

export default async function googleLoginController(
    req: Request,
    res: Response
) {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).send("Email is required");
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).send("Invalid credentials");
        }

        const token = generateToken(user.id);

        res.status(200).send({ auth_token: token });
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error");
    }
}
