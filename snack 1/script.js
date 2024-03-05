const automobili = [
  {
    marca: "fiat",
    modello: "fiat 500",
    alimentazione: "gpl",
  },

  {
    marca: "lancia",
    modello: "flancia ypsilon",
    alimentazione: "diesel",
  },

  {
    marca: "fiat",
    modello: "panda",
    alimentazione: "benzina",
  },

  {
    marca: "kia",
    modello: "picanto",
    alimentazione: "benzina",
  },

  {
    marca: "hyunday",
    modello: "i10",
    alimentazione: "gpl",
  },

  {
    marca: "fiat",
    modello: "fiat 500",
    alimentazione: "benzina",
  },

  {
    marca: "dacia",
    modello: "sandero",
    alimentazione: "elettrico",
  },

  {
    marca: "renault",
    modello: "clio",
    alimentazione: "metano",
  },

  {
    marca: "ford",
    modello: "fiesta",
    alimentazione: "benzina",
  },

  {
    marca: "toyota",
    modello: "yaris",
    alimentazione: "diesel",
  },
];

const autoBenzina = automobili.filter(
  (auto) => auto.alimentazione == "benzina"
);
console.log(autoBenzina);

const autoDiesel = automobili.filter((auto) => auto.alimentazione == "diesel");
console.log(autoDiesel);

const remainingCars = automobili.filter((auto) => {
  if (auto.alimentazione != "diesel" && auto.alimentazione != "benzina") {
    return true;
  }
});
console.log(remainingCars);
