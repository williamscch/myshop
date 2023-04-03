import { Client } from "pg";

const dbConnect = async () => {
  const client = new Client({
    host: "localhost",
    port: 5433,
    user: "williams",
    password: "1234",
    database: "myshop",
  });
  await client.connect();
  return client;
};

export default dbConnect;
