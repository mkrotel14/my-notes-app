import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const TodoController = () => {
  const getTodosByCategory = async (
    req: Request,
    res: Response
  ): Promise<Response | undefined> => {
    try {
      await prisma.$connect();

      const { categoryId } = req.params;
      const todos = await prisma.todo.findMany({
        where: { categoryId: Number(categoryId) },
      });

      res.header("Access-Control-Allow-Origin", "*");
      return res.json(todos);
    } catch (e) {
      return res.status(400).json({ message: e.message });
    } finally {
      await prisma.$disconnect();
    }
  };

  const getTodoCategoryCount = async (req: Request, res: Response) => {
    try {
      await prisma.$connect();
      let todosCategoryCount: any = [];

      const category = await prisma.category.findMany();

      for (const { id, type } of category) {
        todosCategoryCount = [
          ...todosCategoryCount,
          {
            id,
            category: type,
            categoryAmount: await prisma.todo.count({
              where: { categoryId: id },
            }),
          },
        ];
      }

      res.header("Access-Control-Allow-Origin", "*");
      return res.json(todosCategoryCount);
    } catch (e) {
      return res.status(400).json({ message: e.message });
    } finally {
      await prisma.$disconnect();
    }
  };

  const getTodo = async (id: number) => {
    try {
      await prisma.$connect();
      return await prisma.todo.findUnique({ where: { id } });
    } catch (e) {
      return null;
    } finally {
      await prisma.$disconnect();
    }
  };

  const postTodo = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { text, categoryId } = req.body;

      await prisma.$connect();

      res.header("Access-Control-Allow-Origin", "*");
      return res.json(await prisma.todo.create({ data: { text, categoryId } }));
    } catch (e) {
      return res.status(400).json({ message: e.message });
    } finally {
      await prisma.$disconnect();
    }
  };

  const updateTodo = async (req: Request, res: Response): Promise<Response> => {
    try {
      await prisma.$connect();

      const { id } = req.params;
      const { text, categoryId } = req.body.data;

      res.header("Access-Control-Allow-Origin", "*");
      res.json(
        await prisma.todo.update({
          where: { id: Number(id) },
          data: { text, categoryId },
        })
      );
    } catch (e) {
      return res.status(400).json({ message: e.message });
    } finally {
      await prisma.$disconnect();
    }
  };

  const deleteTodo = async (req: Request, res: Response): Promise<Response> => {
    try {
      await prisma.$connect();

      const { id } = req.params;

      res.header("Access-Control-Allow-Origin", "*");
      res.json(await prisma.todo.delete({ where: { id: Number(id) } }));
    } catch (e) {
      return res.status(400).json({ message: e.message });
    } finally {
      await prisma.$disconnect();
    }
  };

  return {
    getTodosByCategory,
    getTodoCategoryCount,
    postTodo,
    updateTodo,
    deleteTodo,
  };
};
