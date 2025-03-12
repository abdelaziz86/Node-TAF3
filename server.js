 
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

const events = [
  {
    id: 1,
    title: "Evenement sur l'IA",
    date: "2025-04-10",
    description: "Une conférence sur l'intelligence artificielle.",
    status: "actif",
  },
  {
    id: 2,
    title: "Evenement sur le web",
    date: "2025-06-20",
    description: "Une conférence sur le développement web.",
    status: "inactif",
  },
  {
    id: 3,
    title: "Atelier de Programmation",
    date: "2025-05-15",
    description: "Un atelier pour apprendre à coder.",
    status: "actif",
  },
];

// Route pour afficher la page des événements
app.get("/", (req, res) => {
  res.render("index", { events });
});

// Lancer le serveur
const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Serveur en ligne : http://localhost:${PORT}`)
);
