import http from "http";
import dotenv from "dotenv";
import app from "./app.js";
import database from "./model/Database.js";
dotenv.config({ path: "./config/.env" });

const PORT = process.env.PORT || 8080;

async function main() {
  await database.mongoClient.connect();
  http.createServer(app).listen(PORT);
  return `server listen on http://localhost: ${PORT}`;
}

main().then(console.log).catch(console.error);
