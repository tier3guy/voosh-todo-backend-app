import { hashPassword } from "../../utils/auth.js";
import User from "../../models/users.model.js";
export default async function signupController(req, res) {
    try {
        const { email, password, fname, lname } = req.body;
        if (!email || !password || !fname) {
            return res
                .status(400)
                .send("First name, email and password are required");
        }
        const ifEmailAlreadyExists = await User.findOne({ email });
        if (ifEmailAlreadyExists) {
            return res.status(400).send("Email already exists");
        }
        const hashedPassword = await hashPassword(password);
        const user = new User({
            fname,
            lname,
            email,
            password: hashedPassword,
        });
        await user.save();
        res.status(201).send("User created successfully");
    }
    catch (error) {
        res.status(401).send("Error creating user");
        console.log(error);
    }
}
//# sourceMappingURL=signup.controller.js.map