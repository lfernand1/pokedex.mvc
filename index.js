const express = require("express");
const path = require("path");
const app = express();
let message = "";

const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

const pokedex = [
  {
    id: 1,
    num: "N: 012",
    nome: "Butterfree",
    tipo: "Tipo: Vôo",
    foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png",
    descricao:
      "Descrição: Na batalha, ele bate as asas em grande velocidade para liberar poeira altamente tóxica no ar.",
    altura: "Altura: 1,1m",
    peso: "Peso: 32 kg",
    categoria: "Categoria: Borboleta",
    habilidade: "Habilidade: Olhos compostos",
  },


  {
    id:2,
    num: "N:024",
    nome: "Arkbok",
    tipo: "Tipo: Poção",
    foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png",
    descricao:
      "Descrição: Os padrões assustadores em sua barriga foram estudados. Seis variações foram confirmadas.",
    altura: "Altura: 3,5m",
    peso: "Peso: 65 kg",
    categoria: "Categoria: Cobra",
    habilidade: "Habilidades: trocar pele, intimidar",
  },

  {
    id:3,
    num: "N:039",
    nome: "Jigglypuff",
    tipo: "Tipo: Fadas",
    foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png",
    descricao:
      "Descrição: Jigglypuff tem capacidade pulmonar de alto nível, mesmo em comparação com outros Pokémon. Ele não vai parar de cantar suas canções de ninar até que seus inimigos adormeçam.",
    altura: "Altura: 0,5m",
    peso: "Peso: 5,5 kg",
    categoria: "Categoria: Balão",
    habilidade: "Habilidades: Amuleto fofo, Competitivo",
  },
];

app.get("/", (req, res) => {
  res.render("index", { pokedex });
});

app.get("/cadastro", (req, res) => {
  res.render("cadastro.ejs");
});

app.post("/add", (req, res) => {
  const pokemon = req.body;
  pokemon.id = pokedex.length +1;
  pokedex.push(pokemon)
  res.redirect("/");
});



app.listen(port, () =>

  console.log('servidor rodando em http://localhost:',port)
);
