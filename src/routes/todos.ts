import { Router } from "express";
import { FakeTodoDb } from "../db/todoDB";

const router = Router();

const todos: FakeTodoDb = new FakeTodoDb();

router.get("/todo", (req, res) =>
  res.json(todos.select(undefined).filter((t) => !t.complete))
);
router.get("/completed", (req, res) =>
  res.json(todos.select(undefined).filter((t) => t.complete))
);
router.get("/:id", (req, res) => res.json(todos.select(req.params.id)));
router.post("/", (req, res) => res.json(todos.insert(req.body)));
router.put("/:id", (req, res) =>
  res.json(todos.update(req.body, req.params.id))
);
router.delete("/:id", (req, res) => res.json(todos.delete(req.params.id)));

export default router;
