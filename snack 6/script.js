/* 
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

const squadreDiCalcio = [
  { nome: "Juventus", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Roma", puntiFatti: 0, falliSubiti: 0 },
];
console.log(squadreDiCalcio);

squadreDiCalcio.forEach((squadra) => {
  squadra.puntiFatti = Math.floor(Math.random() * 50) + 1;
  squadra.falliSubiti = Math.floor(Math.random() * 50) + 1;
});

const noPoints = squadreDiCalcio.map((squadra) => {
  let nuovaSquadra = { nome: squadra.nome, falliSubiti: squadra.falliSubiti };
  return nuovaSquadra;
});
console.log(noPoints);
