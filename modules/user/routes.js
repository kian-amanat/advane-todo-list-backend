import {
  getUsersController,
  createUserController,
  updateUserController,
  loginUserController,
  getUserbyUserNameController,
} from "./controller.js";

import express from "express";

const router = express.Router();
const publicRouter = express.Router();

publicRouter.post("/signIn", loginUserController);
publicRouter.post("/user", createUserController);
router.get("/get/userName", getUserbyUserNameController);
router.get("/user/:id", getUsersController);
router.put("/user/:id", updateUserController);

export { router, publicRouter };
