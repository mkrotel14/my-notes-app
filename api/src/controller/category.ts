import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const CategoryController = () => {
  const getCategories = async (
    req: Request,
    res: Response
  ): Promise<Response | undefined> => {
    try {
      await prisma.$connect();

      const categories = await prisma.category.findMany();

      return res.json(categories);
    } catch (e) {
      return res.status(400).json({ message: e.message });
    } finally {
      await prisma.$disconnect();
    }
  };

  return {
    getCategories,
  };
};
