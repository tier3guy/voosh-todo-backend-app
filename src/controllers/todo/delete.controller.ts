import { Request, Response } from "express";
import { IJwtPayload } from "../../interfaces/index.js";
import Todo from "../../models/todo.model.js";
import { getTodoId } from "../../utils/todo.js";

export default async function deleteController(req: Request, res: Response) {
    try {
        const user = req.user as IJwtPayload;
        const id = user.id;

        const todoId = getTodoId(req.path);

        const todo = await Todo.findOneAndDelete({ _id: todoId, owner: id });
        if (!todo) {
            return res
                .status(404)
                .send(
                    "Todo not found or you are not authorized to delete this todo"
                );
        }

        res.json({ message: "Todo deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error");
    }
}
