import { Request, Response } from "express";
import { IJwtPayload } from "../../interfaces/index.js";
import Todo from "../../models/todo.model.js";
import { getTodoId } from "../../utils/todo.js";

export default async function getController(req: Request, res: Response) {
    try {
        const user = req.user as IJwtPayload;
        const id = user.id;

        const todoId = getTodoId(req.path);

        const todo = await Todo.findOne({ owner: id, _id: todoId });
        if (!todo) {
            return res
                .status(404)
                .send(
                    "Todo not found or you are not authorized to delete this todo"
                );
        }

        res.status(200).json(todo);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error");
    }
}
