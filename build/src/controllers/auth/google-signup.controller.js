import { generateToken } from "../../utils/auth.js";
import User from "../../models/users.model.js";
export default async function googleSignupController(req, res) {
    try {
        const { email, fname, lname } = req.body;
        if (!email) {
            return res.status(400).send("Email is required");
        }
        const ifEmailAlreadyExists = await User.findOne({ email });
        if (ifEmailAlreadyExists) {
            return res.status(400).send("Email already exists");
        }
        const newUser = new User({
            fname: fname || "null",
            lname,
            email,
            password: "null",
        });
        const resp = await newUser.save();
        const token = generateToken(resp.id);
        res.status(200).send({ auth_token: token });
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal server error");
    }
}
//# sourceMappingURL=google-signup.controller.js.map