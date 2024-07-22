export default async function getTodoController(req, res) {
    try {
        const user = req.user;
        console.log(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal server error");
    }
}
//# sourceMappingURL=getTodo.controller.js.map