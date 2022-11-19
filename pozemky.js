const input = `3
0 0 5 5 0.3
-1 0 0 1 1
0 -300 0 0 4.45`;

const data = input.split('\n');
const amount = Number(data[0]);

let total = 0;

for(let i = 0; i < amount; i++) {
    const [x1, y1, x2, y2, price] = data[i + 1].split(' ');

    console.log(`${x1} ${y1} ${x2} ${y2} ${Number(price)}`);
    total += (Number(x2) - Number(x1)) * (Number(y2) - Number(y1)) * Number(price);
}

console.log(total);

      // console.log("Tada s pridanim trojky: " + data[j + 3]);

      //Tady to chce podminku, kde rovnou zapisu souradnice prvků a pak budu počítat abstraktně

/*
//navazuje na "total hodnotu" z predchoziho cyklu

let cisloPole = Number(velikostPole[0]);
console.log("cislo pole na number: " + cisloPole);

let poleCilu = function(sirka, vyska) {
  let cilovePole = [];

  for (let j = 0; j < sirka; j++) {
    let row = [];

    for (let k = 0; k < vyska; k++) {
      row.push(data[j + 2 + cisloPole].charAt(k));
    }
    cilovePole.push(row);
  }
  return cilovePole;
}

console.log("Pole cílů: ");
console.log(poleCilu(velikostPole[0], velikostPole[1]));

*/





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