import express from "express";
import {
  facts,
  index,
  factsRecent,
  factsRandom,
  ajouter,
  moderation,
  voirFact,
  creerFact,
} from "./controller/factsController.js";

const routeur = express.Router();

routeur.get("/", index);
routeur.get("/facts", facts);
routeur.get("/facts/recent", factsRecent);
routeur.get("/facts/random", factsRandom);
routeur.get("/ajouter", ajouter);
routeur.get("/moderation", moderation);
routeur.get("/voir_fact/:id", voirFact);

routeur.post("/api/newfact", creerFact);

export default routeur;
