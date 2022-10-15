import { MongoClient } from "mongodb";

// TODO : régler process.env.DATABASE_URL = undefined
// const url = process.env.DATABASE_URL;
const url = "mongodb://localhost:27017";
const mongoClient = new MongoClient(url, {});

export default mongoClient;
