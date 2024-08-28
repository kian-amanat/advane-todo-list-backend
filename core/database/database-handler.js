import pg from "pg";
import { POSTGRES_CREDENTIALS } from "../secrets/index.js";

const { Client } = pg;

async function query(query, params) {
  let client;
  try {
    client = new Client(POSTGRES_CREDENTIALS);
    await client.connect();
    const res = await client.query(query, params);
    return res;
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    await client.end();
  }
}

export { query };
