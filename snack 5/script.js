/* 
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal
*/

const biciclette = [
  { nome: "Mountain Bike", peso: 12 },
  { nome: "Bici da città", peso: 10 },
  { nome: "Bici da corsa", peso: 8 },
  { nome: "Bici pieghevole", peso: 9 },
];

let pesoMinore = 30;
let biciMinore;
biciclette.forEach((bici) => {
  let { peso } = bici;
  // console.log(peso);

  if (peso < pesoMinore) {
    pesoMinore = peso;
    biciMinore = bici;
  }
});

const { nome, peso } = biciMinore;
console.log(`la ${nome} che pesa ${peso}kg è la bici che pesa di meno`);
