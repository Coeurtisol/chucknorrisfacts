import dotenv from "dotenv";
import express from "express";
import routeur from "./routeur.js";
dotenv.config();

const server = express();

server.use("/", routeur);
server.set('views', 'view');
server.set('view engine', 'ejs');
server.use(express.static('public'));
server.use('/bootstrap',express.static('node_modules/bootstrap/dist'));
// server.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log("server listen on http://localhost:" + PORT);
});
