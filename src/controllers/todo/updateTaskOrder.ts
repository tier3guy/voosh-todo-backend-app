import { Request, Response } from "express";
import Todo from "../../models/todo.model.js";
import { IJwtPayload } from "../../interfaces/index.js";

export default async function updateTaskOrder(req: Request, res: Response) {
    try {
        const user = req.user as IJwtPayload;
        const userId = user.id;
        const newTasks = req.body.tasks;

        // Delete all tasks where the owner is the user
        await Todo.deleteMany({ owner: userId });

        // Create new tasks
        const createdTasks = await Todo.insertMany(
            newTasks.map((task) => ({ ...task, owner: userId }))
        );

        res.status(200).json(createdTasks);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error");
    }
}
