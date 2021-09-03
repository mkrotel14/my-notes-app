import { Router } from "express";

import todo from "./todo";
import category from "./category";

const routes = Router();

routes.use("/todo", todo);
routes.use("/category", category);

export default routes;
