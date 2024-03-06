const zucchine = [
  {
    varieta: "verde",
    peso: 3,
    lunghezza: 5,
  },

  {
    varieta: "gialla",
    peso: 4,
    lunghezza: 10,
  },

  {
    varieta: "bianca",
    peso: 7,
    lunghezza: 5,
  },

  {
    varieta: "azzurra",
    peso: 2,
    lunghezza: 20,
  },

  {
    varieta: "rossa",
    peso: 10,
    lunghezza: 25,
  },
];

let pesoTot = 0;

zucchine.forEach((zucchina) => {
  pesoTot += zucchina.peso;
});

console.log(pesoTot + "kg");
