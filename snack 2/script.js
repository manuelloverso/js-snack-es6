const arrayStringhe = [
  "stringa1",
  "STRINGA2",
  "Stringa3",
  "stringa4",
  "STRINGA5",
  "stringa6",
];

const formatted = arrayStringhe.map((string) => {
  //let lowerCase = string.toLocaleLowerCase();
  //console.log(lowerCase);
  // return lowerCase.charAt(0).toLocaleUpperCase() + lowerCase.slice(1);
  //oppure
  return (
    string.charAt(0).toLocaleUpperCase() + string.slice(1).toLocaleLowerCase()
  );
});
console.log(formatted);
