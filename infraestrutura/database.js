import { Client } from "pg";

async function testeConsultaSql() {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
  });

  await client.connect();

  const result = await client.query("SELECT $1::text as name", ["brianc"]);
  console.log(result);
  client.end();
  return result.rows[0];
}

export default {
  testeConsultaSql: testeConsultaSql,
};
