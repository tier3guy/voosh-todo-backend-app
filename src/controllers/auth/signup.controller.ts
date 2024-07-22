import { Request, Response } from "express";
import { hashPassword } from "../../utils/auth.js";
import { users } from "../../../constants.js";

export default async function signupController(req: Request, res: Response) {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).send("Username and password are required");
    }

    const hashedPassword = await hashPassword(password);
    const userId = new Date().getTime().toString(); // Generate a simple unique ID for demo purposes
    users[username] = { id: userId, username, password: hashedPassword };

    res.status(201).send("User created successfully");
}
