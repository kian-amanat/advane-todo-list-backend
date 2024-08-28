import { query } from "../../core/database/database-handler.js";

async function getUsersById(id) {
  const sql = ` select * from users
    where id = $1  `;
  const result = await query(sql, [id]);
  return result.rows;
}

async function getUserByUserName(userName) {
  const sql = ` select * from users
    where user_name = $1  `;
  const result = await query(sql, [userName]);
  return result.rows;
}

async function updateUsersById(id, userName, password) {
  const sql = `
    update users
    set user_name = $2, password = $3
    where id = $1
  `;
  const result = await query(sql, [id, userName, password]);
  return result;
}

async function createUsers(userName, password) {
  const sql = `
    insert into users
    (user_name , password) 
    values 
    ($1 , $2) `;
  const result = await query(sql, [userName, password]);
  return result.rows;
}

export { getUsersById, createUsers, updateUsersById, getUserByUserName };
