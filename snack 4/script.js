/* 
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
*/
const persone = [
  { nome: "Mario", cognome: "Rossi", eta: 10 },
  { nome: "Laura", cognome: "Bianchi", eta: 20 },
  { nome: "Luigi", cognome: "Verdi", eta: 18 },
  { nome: "Anna", cognome: "Neri", eta: 14 },
];

/* const guidatori = [];
persone.forEach((persona) => {
  guidatori.push(
    `${persona.nome} ${persona.cognome} ${
      persona.eta >= 18 ? "Puo guidare" : "Non puo guidare"
    }`
  );
});
console.log(guidatori); */

const guidatori = persone.map((persona) => {
  return `${persona.nome} ${persona.cognome} ${
    persona.eta >= 18 ? "Puo guidare" : "Non puo guidare"
  }`;
});
console.log(guidatori);
