export default async function allTodoController(req, res) {
    try {
        const user = req.user;
        console.log(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal server error");
    }
}
//# sourceMappingURL=allTodo.controller.js.map