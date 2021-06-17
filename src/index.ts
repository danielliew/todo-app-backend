import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";

import todos from "./routes/todos";
import { HEALTHY } from "./constants";

dotenv.config();

const app: Application = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send(`<h1>${HEALTHY}</h1>`));
app.use("/todos", todos);

export default app;
