import Todo from "../../models/todo.model.js";
import { getTodoId } from "../../utils/todo.js";
export default async function updateController(req, res) {
    try {
        const user = req.user;
        const id = user.id;
        const todoId = getTodoId(req.path);
        const { title, description, completed, status } = req.body;
        const todo = await Todo.findOneAndUpdate({ _id: todoId, owner: id }, { title, description, completed, status }, { new: true });
        if (!todo) {
            return res.status(404).send("Todo not found");
        }
        const todos = await Todo.find({ owner: id });
        res.json(todos);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal server error");
    }
}
//# sourceMappingURL=update.controller.js.map