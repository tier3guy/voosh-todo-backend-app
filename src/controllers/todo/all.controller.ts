import { Request, Response } from "express";
import { IJwtPayload } from "../../interfaces/index.js";
import Todo from "../../models/todo.model.js";

export default async function allController(req: Request, res: Response) {
    try {
        const user = req.user as IJwtPayload;
        const id = user.id;

        const todos = await Todo.find({ owner: id });
        res.status(200).json(todos);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error");
    }
}
