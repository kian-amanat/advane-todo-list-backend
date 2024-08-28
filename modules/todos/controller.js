import {
  getTaskById,
  createTask,
  updateTaskById,
  removeTaskById,
} from "../../model/todos/index.js";

import { getTaskByUserIdService } from "../../services/todos/service.js";




const getTaskController = async (req, res) => {
  try {
    console.log("req.user.id =>>>", req.user.id);
    const taskId = req.user.id;
    if (!taskId) {
      console.log("you doesnt add your id");
    } else {
      const getTask = await getTaskByUserIdService(taskId);
      res.json(getTask);
    }
  } catch (error) {
    console.log(error);
  }
};

const createTaskController = async (req, res) => {
  try {
    console.log("req.user.id for create =>>>", req.user.id);
    let ownerId = req.user.id;
    const { title, description, isCompleted = false } = req.body;
    await createTask(title, description, isCompleted, ownerId);
    res.json({
      message: " your task is added to the database",
    });
  } catch (error) {
    res.json({
      message: `your tasks doesnt add to database for that resaon => ${error}`,
    });
    console.log(error);
  }
};

const updateTaskController = async (req, res) => {
  try {
    const upId = req.params.id;
    const {
      title = "Default Title",
      description = "Default description",
      isCompleted,
    } = req.body;
    if (!upId) {
      console.log("you doesnt add your id");
    } else {
      const updateTask = await updateTaskById(
        upId,
        title,
        description,
        isCompleted
      );
      res.json({
        isCompleted: isCompleted,
        message: "your task is updated",
      });
    }
  } catch (error) {
    res.json({
      message: `your tasks doesnt update for that resaon => ${error}`,
    });
    console.log(error);
  }
};

const removeTaskController = async (req, res) => {
  try {
    const remId = req.params.id;
    console.log("this is the remove task id", remId);
    if (!remId) {
      console.log("you doesnt add your id");
    } else {
      await removeTaskById(remId);
      res.json({
        message: `your task with id : ${remId} is deleted`,
        remId: remId,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export {
  getTaskController,
  createTaskController,
  removeTaskController,
  updateTaskController,
};
