import dotenv from "dotenv";
import express from "express";
import routeur from "./routeur.js";
dotenv.config({ path: "./config/.env" });

const app = express();

app.set("views", "view");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/bootstrap", express.static("node_modules/bootstrap/dist"));
app.use(express.urlencoded({ extended: false }));
app.use("/", routeur);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("app listen on http://localhost:" + PORT);
});
