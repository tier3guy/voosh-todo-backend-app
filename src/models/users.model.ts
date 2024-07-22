import { Schema, model } from "mongoose";
import { IUser } from "../interfaces/index.js";

const UserSchema = new Schema<IUser>({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const User = model<IUser>("User", UserSchema);

export default User;
