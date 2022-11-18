let input = `1
3 3
>  
 ∧ 
   
  #
 # `;

// let data = input.toString();
let data = input.split("\n");
console.log(data)

const pocetHer = Number(data[0]);

const velikostPole = [data[1].charAt(0), data[1].charAt(2)];

console.log("Rozměry pole: " + velikostPole);
console.log("Prvni prvek v poli:" + data[2].charAt(0));

let total = 3;

let poleRyb = function(sirka, vyska) {
  let herniPole = [];

  for (let j = 0; j < sirka; j++) {
    let row = [];

    for (let k = 0; k < vyska; k++) {
      row.push(data[j + 2][k]);
      // console.log("Tada s pridanim trojky: " + data[j + 3]);
  }
  herniPole.push(row);
}
  return herniPole;
};

console.log("Pole:")
console.log(poleRyb(velikostPole[0], velikostPole[1]));

//navazuje na "total hodnotu" z predchoziho cyklu
let poleCilu = function(sirka, vyska) {
  let herniPole = [];

  for (let j = 0; j < sirka; j++) {
    let row = [];

    for (let k = 0; k < vyska; k++) {
      row.push(data[j + 2][k]);
  }
  herniPole.push(row);
}
  return herniPole;
};
// console.log(poleCilu(velikostPole[0], velikostPole[1]));







// let herniPole = [];

// for (let j = 0; j < (velikostPole[0]); j++) {
//   let total = 0;

//   let row = [];

//   for (let k = 0; k < velikostPole[1]; k++) {
//     total++;
//     row.push(data[total].split(' '));
//   }
//   herniPole.push(row);
// }
// console.log(herniPole)


// console.log(poleRyb(velikostPole[0], velikostPole[1]));



  // Vytvoření dvojrozměrného pole s načtením všech hodno dle šířky a výšky
  // Totéž pro cílové pozice ryb, kde by cyklus přeskošil a začal znova po dosažení velikosti šířky
  // Následné posouvání hodnot dle šipky a dotazy k porovnání
// for (let i = 0; i < pocetHer; i++) {
  
// }



