import { Schema, model } from "mongoose";
const UserSchema = new Schema({
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
    },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});
const User = model("User", UserSchema);
export default User;
//# sourceMappingURL=users.model.js.map