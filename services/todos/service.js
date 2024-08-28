import { getTasks } from "../../model/todos/index.js";

async function getTaskByUserIdService(userId) {
  const tasks = await getTasks(userId);
  return tasks;
}

export { getTaskByUserIdService };
