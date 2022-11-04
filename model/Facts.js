import database from "./Database.js";
import { ObjectId } from "mongodb";
const factColl = database.CNF_DB.collection("facts");

export class Fact {
  data = {};
  constructor(contenu) {
    this.data.contenu = contenu;
    this.data.dateCreation = new Date();
    this.data.nbNote = 0;
    this.data.totalNote = 0;
    this.data.note = null;
    this.data.nbAime = 0;
    this.data.nbAimePas = 0;
    this.data.accepte = null;
  }

  async sauvegarder() {
    await factColl.insertOne(this.data);
  }

  static async trouverParId(_id) {
    const fact = await factColl.findOne({ _id: ObjectId(_id) });
    return fact;
  }

  static async trouverFactsPourModeration() {
    const facts = await factColl.find({ accepte: null }).toArray();
    const factsFormates = facts.map(this.formaterFactId);
    return factsFormates;
  }

  static formaterFactId(fact) {
    return { ...fact, _id: fact._id.toString() };
  }

  static async modifierNote(factId, note) {
    const valeurNote = {
      1: 0,
      2: 5,
      3: 10,
    };
    if (note < 1 || note > 3) {
      throw "La valeur de la note est incorrecte";
    }
    const fact = await this.trouverParId(factId);
    if (!fact) {
      throw "Fact introuvable";
    }
    const nouveauTotalNote = fact.totalNote + valeurNote[note];
    const nouveauNbNote = fact.nbNote + 1;
    const nouvelNote = +(nouveauTotalNote / nouveauNbNote).toFixed(2);
    await factColl.updateOne(
      { _id: ObjectId(factId) },
      {
        $set: {
          totalNote: nouveauTotalNote,
          nbNote: nouveauNbNote,
          note: nouvelNote,
        },
      }
    );
  }
}
