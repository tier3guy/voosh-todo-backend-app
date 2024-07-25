import Todo from "../../models/todo.model.js";
export default async function updateTaskOrder(req, res) {
    try {
        const user = req.user;
        const userId = user.id;
        const newTasks = req.body.tasks;
        // Delete all tasks where the owner is the user
        await Todo.deleteMany({ owner: userId });
        // Create new tasks
        const createdTasks = await Todo.insertMany(newTasks.map((task) => ({ ...task, owner: userId })));
        res.status(200).json(createdTasks);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal server error");
    }
}
//# sourceMappingURL=updateTaskOrder.js.map