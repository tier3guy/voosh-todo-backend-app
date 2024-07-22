import dotenv from "dotenv";

dotenv.config();

export const APP_MODE: "DEV" | "PROD" = "DEV";

export const PORT = APP_MODE === "DEV" ? 3000 : process.env.PORT!;

export const JWT_SECRET = process.env.JWT_SECRET!;
export const COOKIE_NAME = process.env.COOKIE_NAME!;

// Dummy user storage, replace with your database logic
export const users: {
    [key: string]: { id: string; username: string; password: string };
} = {};

export const MONGO_DB_HOST = process.env.DB_HOST!;
