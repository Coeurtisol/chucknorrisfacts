import { Fact } from "../model/Facts.js";

export function index(req, res) {
  console.log("/");
  res.render("index");
}
export function facts(req, res) {
  console.log("/facts");
  res.render("facts");
}
export function factsRecent(req, res) {
  console.log("/facts/recent");
  res.render("facts");
}
export function factsRandom(req, res) {
  console.log("/facts/random");
  res.render("facts");
}
export function ajouter(req, res) {
  console.log("/ajouter");
  res.render("ajouter");
}
export function moderation(req, res) {
  console.log("/moderation");
  res.render("moderation");
}
export function voirFact(req, res) {
  console.log("/voir_fact/:id");
  res.render("index");
}

// API
const apiPrefix = "api";
export async function creerFact(req, res) {
  console.log("/" + apiPrefix + "/newfact");
  const contenu = req.body.contenu;
  try {
    const newFact = new Fact(contenu);
    console.log(newFact);
    const data = await newFact.sauvegarder();
    console.log(data);
    res.render("moderation");
  } catch (error) {
    console.log(error);
    res.render("moderation");
  }
}
