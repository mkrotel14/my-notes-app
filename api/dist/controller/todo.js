"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoController = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const TodoController = () => {
    const getTodosByCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield prisma.$connect();
            const { categoryId } = req.params;
            const todos = yield prisma.todo.findMany({
                where: { categoryId: Number(categoryId) },
            });
            res.header("Access-Control-Allow-Origin", "*");
            return res.json(todos);
        }
        catch (e) {
            return res.status(400).json({ message: e.message });
        }
        finally {
            yield prisma.$disconnect();
        }
    });
    const getTodoCategoryCount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield prisma.$connect();
            let todosCategoryCount = [];
            const category = yield prisma.category.findMany();
            for (const { id, type } of category) {
                todosCategoryCount = [
                    ...todosCategoryCount,
                    {
                        id,
                        category: type,
                        categoryAmount: yield prisma.todo.count({
                            where: { categoryId: id },
                        }),
                    },
                ];
            }
            res.header("Access-Control-Allow-Origin", "*");
            return res.json(todosCategoryCount);
        }
        catch (e) {
            return res.status(400).json({ message: e.message });
        }
        finally {
            yield prisma.$disconnect();
        }
    });
    const getTodo = (id) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield prisma.$connect();
            return yield prisma.todo.findUnique({ where: { id } });
        }
        catch (e) {
            return null;
        }
        finally {
            yield prisma.$disconnect();
        }
    });
    const postTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { text, categoryId } = req.body;
            yield prisma.$connect();
            res.header("Access-Control-Allow-Origin", "*");
            return res.json(yield prisma.todo.create({ data: { text, categoryId } }));
        }
        catch (e) {
            return res.status(400).json({ message: e.message });
        }
        finally {
            yield prisma.$disconnect();
        }
    });
    const updateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield prisma.$connect();
            const { id } = req.params;
            const { text, categoryId } = req.body.data;
            res.header("Access-Control-Allow-Origin", "*");
            res.json(yield prisma.todo.update({
                where: { id: Number(id) },
                data: { text, categoryId },
            }));
        }
        catch (e) {
            return res.status(400).json({ message: e.message });
        }
        finally {
            yield prisma.$disconnect();
        }
    });
    const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield prisma.$connect();
            const { id } = req.params;
            res.header("Access-Control-Allow-Origin", "*");
            res.json(yield prisma.todo.delete({ where: { id: Number(id) } }));
        }
        catch (e) {
            return res.status(400).json({ message: e.message });
        }
        finally {
            yield prisma.$disconnect();
        }
    });
    return {
        getTodosByCategory,
        getTodoCategoryCount,
        postTodo,
        updateTodo,
        deleteTodo,
    };
};
exports.TodoController = TodoController;
//# sourceMappingURL=todo.js.map