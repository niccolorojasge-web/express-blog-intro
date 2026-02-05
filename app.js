const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send("<h1>server del mio blog</h1>")
})
app.listen(port, () => {
    console.log(`example app listening on port ${port}`);
});
app.get('/bacheca',(req, res)=>{
//settiamo dati bacheca
    const bacheca = [{
    titolo: "ciambellone",
    contenuto: "Il ciambellone è un dolce tradizionale soffice e profumato, perfetto per la colazione o la merenda.",
    immagine: "images/ciambellone.jpeg",
    tags: ["dolce", "tradizionale", "colazione"]
  },
  {
    titolo: "cracker-barbabietola",
    contenuto: "I cracker alla barbabietola sono uno snack croccante e colorato, ideale come alternativa sana ai cracker classici.",
    immagine: "images/cracker_barbabietola",
    tags: ["snack", "barbabietola", "salato"]
  },
  {
    titolo: "pane fritto dolce",
    contenuto: "Il pane fritto dolce è una ricetta semplice e golosa, spesso preparata per recuperare il pane raffermo.",
    immagine: "images/pane_fritto_dolce.jpeg",
    tags: ["dolce", "riciclo", "tradizionale"]
  },
  {
    titolo: "pasta-barbabietola",
    contenuto: "La pasta alla barbabietola si distingue per il suo colore vivace e il sapore delicato, perfetta per piatti creativi.",
    immagine: "images/pasta_barbabietola.jpeg",
    tags: ["pasta", "barbabietola", "primo"]
  },
  {
    titolo: "torta paesana  ",
    contenuto: "La torta paesana è un dolce rustico lombardo a base di pane, cacao e frutta secca.",
    immagine: "images/torta_paesana",
    tags: ["dolce", "tradizionale", "forno"]
  }
];
//ritorno res bacheca 
res.json(bacheca)
})
app.listen(port,()=>{
console.log(`example app listening on port ${port}`); 
});
