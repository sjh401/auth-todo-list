import { Router } from "express";
import { createTodo, deleteTodo, getAllTodos, getTodo, updateTodo } from "../controllers/todos";
import restrict from "../helpers/restrict";

const router = Router();

// get all todos
router.get("/todos", getAllTodos);
// get id todo
router.get("/todos/:id", getTodo);
// post create todo
router.post("/todos", restrict, createTodo);
// put update todo
router.put("/todos/:id", restrict, updateTodo);
// delete delete todo
router.delete("/todos/:id", restrict, deleteTodo);

export default router