import express from "express";
import {
  getTaskController,
  createTaskController,
  removeTaskController,
  updateTaskController,
} from "./controller.js";

const router = express.Router();

router.get("/task/:id", getTaskController);
router.post("/task/add", createTaskController);
router.delete("/task/:id", removeTaskController);
router.put("/task/update/:id", updateTaskController);

export { router };
