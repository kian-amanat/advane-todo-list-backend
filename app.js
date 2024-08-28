import "dotenv/config";
import {
  sendError,
  authorization,
  getMethodPathIp,
} from "./core/middleware/express-middlewares.js";
import { validationMiddleWare } from "./modules/todos/validations.js";
import express from "express";
import { router as taskRouter } from "./modules/todos/routes.js";
import {
  router as userRouter,
  publicRouter as userPublicRouter,
} from "./modules/user/routes.js";
import { authMiddleware } from "./core/middleware/jwt_auth.js";
import cors from "cors";
import { query } from "./core/database/database-handler.js";

const app = express();
const port = 3001;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", // Your frontend URL
    allowedHeaders: ["Authorization", "Content-Type"], // Allow the Authorization header
  })
);
// app.use("/protected-route", authMiddleware);
// app.use(validationMiddleWare);

// app.use(getMethodPathIp);

// app.use(authorization);

app.use(authMiddleware, taskRouter);
app.use(authMiddleware, userRouter);
app.use(userPublicRouter);

// app.use(sendError); //send404errornot found

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
