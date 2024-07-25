import { Request, Response } from "express";
import { IJwtPayload } from "../../interfaces/index.js";
import Todo from "../../models/todo.model.js";

export default async function createController(req: Request, res: Response) {
    try {
        const user = req.user as IJwtPayload;
        const id = user.id;

        const { title, description, status } = req.body;

        if (!title || !description) {
            return res.status(400).send("Title and description are required");
        }

        const todo = new Todo({
            title,
            description,
            status: status || "NOT_STARTED",
            owner: id,
        });
        await todo.save();
        const todos = await Todo.find({ owner: id });

        res.status(201).json(todos);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error");
    }
}
