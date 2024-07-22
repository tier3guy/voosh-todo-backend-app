import { Schema, model } from "mongoose";
const TodoSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    completed: { type: Boolean, default: false },
    status: {
        type: String,
        enum: ["NOT_STARTED", "IN_PROGRESS", "COMPLETED"],
        default: "NOT_STARTED",
    },
    owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
}, {
    timestamps: true,
});
const Todo = model("Todo", TodoSchema);
export default Todo;
//# sourceMappingURL=todo.model.js.map