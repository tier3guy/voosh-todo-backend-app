import { Request, Response } from "express";
import { generateToken } from "../../utils/auth.js";
import User from "../../models/users.model.js";
import { IUser } from "../../interfaces/index.js";

export default async function googleSignupController(
    req: Request,
    res: Response
) {
    try {
        const { email, fname, lname } = req.body;
        if (!email) {
            return res.status(400).send("Email is required");
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).send("Invalid credentials");
        }

        const newUser: IUser = new User({
            fname: fname || "null",
            lname,
            email,
            password: "null",
        });

        const resp = await newUser.save();
        const token = generateToken(resp.id);

        res.status(200).send({ auth_token: token });
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error");
    }
}
