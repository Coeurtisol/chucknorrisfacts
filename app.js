import express from "express";
import routeur from "./routeur.js";

const app = express();

app.set("views", "view");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/bootstrap", express.static("node_modules/bootstrap/dist"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", routeur);

export default app;
