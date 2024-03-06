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

const lessThan15 = zucchine.filter((zucchina) => {
  return zucchina.lunghezza <= 15;
});

console.log(lessThan15);

const moreThan15 = zucchine.filter((zucchina) => {
  return zucchina.lunghezza > 15;
});
console.log(moreThan15);

let pesoMin15 = 0;
let pesoMore15 = 0;

lessThan15.forEach((zucchina) => (pesoMin15 += zucchina.peso));
console.log(pesoMin15);

moreThan15.forEach((zucchina) => (pesoMore15 += zucchina.peso));
console.log(pesoMore15);
