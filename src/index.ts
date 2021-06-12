import express, { Application } from "express";
import dotenv from "dotenv";

import todos from "./routes/todos";

const app: Application = express();

app.get("/", (req, res) => res.send("<h1>Hi</h1>"));
app.use("/todos", todos);

export default app;
