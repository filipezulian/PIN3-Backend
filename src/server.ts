import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const client = new Client({
  port: Number(process.env.DB_PORT) || 5432,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log('Connected to PostgreSQL database');
  } catch (error) {
    console.error('Error connecting to PostgreSQL database', error);
  }
};

const main = async () => {
  await connectToDatabase();
  try {
    const res = await client.query('SELECT * FROM TESTE');
    console.log(res.rows);
  } catch (error) {
    console.error('Error executing query', error);
  } finally {
    await client.end();
  }
};
