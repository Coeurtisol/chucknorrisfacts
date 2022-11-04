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

export async function moderation(req, res) {
  console.log("/moderation");
  let facts = [];
  try {
    facts = await Fact.trouverFactsPourModeration();
  } catch (error) {
    console.log(error);
  } finally {
    res.render("moderation", { facts });
  }
}

export async function voirFact(req, res) {
  console.log("/voir_fact/:id");
  const _id = req.params.id;
  try {
    const fact = await Fact.trouverParId(_id);
    res.render("voir_fact", { fact });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
}

// API
const apiPrefix = "api";

export async function creerFact(req, res) {
  console.log("/" + apiPrefix + "/proposition");
  const contenu = req.body.contenu;
  try {
    const newFact = new Fact(contenu);
    await newFact.sauvegarder();
  } catch (error) {
    console.log(error);
  } finally {
    res.redirect("/moderation");
  }
}

export async function modererFact(req, res) {}

export async function noterFact(req, res) {
  console.log("/" + apiPrefix + "/vote_note");
  const { factId, note } = req.body;
  try {
    await Fact.modifierNote(factId, note);
    res.status(204).end();
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
}
