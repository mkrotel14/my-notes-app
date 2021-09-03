import { Router } from "express";
import cors from "cors";

import { CategoryController } from "../controller/category";

const router = Router();

router.get("/", cors(), CategoryController().getCategories);

export default router;
