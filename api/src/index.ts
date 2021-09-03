import "reflect-metadata";
import express from "express";
import helmet from "helmet";
import cors from "cors";

import routes from "./routes";

const app = express();
const port = process.env.PORT || 3000;

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "*",
  })
);
app.use(routes);

app.listen(port, () => {
  console.log(`MikroORM Express Todo API started at http://localhost:${port}`);
});
