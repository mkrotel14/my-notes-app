import { Router } from "express";
import cors from "cors";

import { TodoController } from "../controller/todo";

const router = Router();

router.get(
  "/category/:categoryId",
  cors(),
  TodoController().getTodosByCategory
);
router.get("/count", cors(), TodoController().getTodoCategoryCount);
router.post("/create", cors(), TodoController().postTodo);
router.patch("/:id", cors(), TodoController().updateTodo);
router.delete("/:id", cors(), TodoController().deleteTodo);

export default router;
