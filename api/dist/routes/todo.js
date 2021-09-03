"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cors_1 = __importDefault(require("cors"));
const todo_1 = require("../controller/todo");
const router = (0, express_1.Router)();
router.get("/category/:categoryId", (0, cors_1.default)(), (0, todo_1.TodoController)().getTodosByCategory);
router.get("/count", (0, cors_1.default)(), (0, todo_1.TodoController)().getTodoCategoryCount);
router.post("/create", (0, cors_1.default)(), (0, todo_1.TodoController)().postTodo);
router.patch("/:id", (0, cors_1.default)(), (0, todo_1.TodoController)().updateTodo);
router.delete("/:id", (0, cors_1.default)(), (0, todo_1.TodoController)().deleteTodo);
exports.default = router;
//# sourceMappingURL=todo.js.map