import { connect } from "mongoose";
import { MONGO_DB_HOST } from "../../constants.js";
export async function connectToDBDriver() {
    try {
        const connected = await connect(MONGO_DB_HOST);
        if (connected) {
            console.log(">> Connected to DB");
        }
    }
    catch (error) {
        console.log(`\n>> Error connecting to the database`);
        console.log(error);
    }
}
//# sourceMappingURL=index.js.map