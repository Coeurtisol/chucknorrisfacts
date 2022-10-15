import mongoClient from "./Database.js";
const factColl = mongoClient.db("chuckNorrisFacts").collection("facts");

export class Fact {
  data = {};
  constructor(contenu) {
    this.data.contenu = contenu;
    this.data.accepte = null;
    this.data.dateCreation = new Date();
  }

  async sauvegarder() {
    await mongoClient.connect();
    const data = await factColl.insertOne(this.data);
    await mongoClient.close();
    return data;
  }
}
