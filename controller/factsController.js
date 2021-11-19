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
export function creerFact(req, res) {
  console.log("/" + apiPrefix + "/newfact");
  console.log(req);
  res.render("index");
}
