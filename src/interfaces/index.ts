import { Document } from "mongoose";

export interface IUser extends Document {
    email: string;
    password: string;
}

export type ITodoStatus = "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";

export interface ITodo extends Document {
    title: string;
    description: string;
    completed: boolean;
    status: ITodoStatus;
    owner: IUser["_id"]; // Reference to User model
    createdAt: Date;
    updatedAt: Date;
}
