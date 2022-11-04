import { MongoClient } from "mongodb";

// TODO : régler process.env.DATABASE_URL = undefined
// const url = process.env.DATABASE_URL;
const url = "mongodb://127.0.0.1:27017";
const mongoClient = new MongoClient(url, {});
const CNF_DB = mongoClient.db("chuckNorrisFacts");

export default {mongoClient,CNF_DB}