import mysql2 from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql2.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  connectionLimit: 10,
});

async function query(sql: string, values?: any) {
  const connection = await pool.getConnection();
  try {
    return await connection.query(sql, values);
  } finally {
    connection.release();
  }
}

const db = { query };

export default db;
