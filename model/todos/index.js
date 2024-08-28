import { query } from "../../core/database/database-handler.js";

async function getTasks(ownerId) {
  const sql = `select * from tasks where owner_id = $1 `;
  const result = await query(sql, [ownerId]);
  return result.rows;
}

async function getTaskById(id) {
  const sql = ` select * from tasks
  where owner_id = $1  `;
  const result = await query(sql, [id]);
  return result.rows;
}

async function createTask(title, description, isCompleted, ownerId) {
  const sql = `
  insert into tasks
  (title, description, is_completed , owner_id ) 
  values 
  ($1 , $2 , $3 , $4) ;
  `;
  const result = await query(sql, [title, description, isCompleted, ownerId]);
  return result;
}

async function updateTaskById(id, title, description, isCompleted) {
  const sql = `
  update tasks
  set title = $2, description = $3, is_completed = $4
  where id = $1
`;
  const result = await query(sql, [id, title, description, isCompleted]);
  return result;
}

async function removeTaskById(id) {
  const sql = `
    delete from tasks
    where id = $1
  `;
  const result = await query(sql, [id]);
  return result;
}

export { getTaskById, createTask, updateTaskById, removeTaskById, getTasks };
