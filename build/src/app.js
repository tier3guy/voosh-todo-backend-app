import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.js";
import authenticate from "./middlewares/authenticate.js";
import { connectToDBDriver } from "./db/index.js";
const app = express();
// Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
// Connecting to db
connectToDBDriver();
// Routes
app.use("/api/auth", authRoutes);
app.get("/protected", authenticate, (req, res) => {
    res.send("This is a protected route");
});
export default app;
//# sourceMappingURL=app.js.map