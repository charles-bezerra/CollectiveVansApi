import dotenv from "dotenv";

dotenv.config();

import express from "express";
import routes from "./routes";

const app = express();
app.use(routes);

app.listen(5000, () => {
    console.log("Listing on port " + 5000);
});
