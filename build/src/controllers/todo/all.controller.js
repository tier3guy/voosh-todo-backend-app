import Todo from "../../models/todo.model.js";
export default async function allController(req, res) {
    try {
        const user = req.user;
        const id = user.id;
        const todos = await Todo.find({ owner: id });
        res.status(200).json(todos);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal server error");
    }
}
//# sourceMappingURL=all.controller.js.map