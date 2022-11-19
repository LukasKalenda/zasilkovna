let input = `1
3 6
>>     
 ∧    
      
  #   
 ## 
   
 3 8`;
// Input není redundatní na jiná čísla

// let data = input.toString();
const data = input.split("\n");
console.log(data)

const pocetHer = Number(data[0]);

const velikostPole = [data[1].charAt(0), data[1].charAt(2)];
const vyskaPole = Number(velikostPole[0]);

console.log("vyska pole: "  + vyskaPole)
console.log("Rozměry pole: " + velikostPole);
console.log("Prvni prvek v poli:" + data[2].charAt(0));

let poleRyb = function(vyska, sirka) {
  let herniPole = [];

  for (let j = 0; j < vyska; j++) {
    let row = [];

    for (let k = 0; k < sirka; k++) {
      // row.push(data[j + 2][k]);
      row.push(data[j + 2].charAt(k));
  }
  herniPole.push(row);
}
  return herniPole;
};

console.log("Pole ryb:")
console.log(poleRyb(velikostPole[0], velikostPole[1]));

// poleCílů

let cilovePole = function(vyska, sirka) {
  let cilovePole = [];

  for (let j = 0; j < vyska; j++) {
    let row = [];

    for (let k = 0; k < sirka; k++) {
      row.push(data[j + 2 + vyskaPole].charAt(k));
    }
    cilovePole.push(row);
  }
  return cilovePole;
};

console.log("Cílové pole:");
console.log(cilovePole(velikostPole[0], velikostPole[1]))
///

// Zápis souřadnic, ideálně vložit do objektu/list, vyvolat abstraktní počítání se souřadnicemi z pole vysledků
//Ryby filter
let rybyFilter = poleRyb(velikostPole[0], velikostPole[1]);
console.log("Pohled do jednoho prvku: " + rybyFilter[1][1])
let count = 0;

for(let y = 0; y < velikostPole[0]; y++) {
  let radek = rybyFilter[y];

  for(let x = 0; x < velikostPole[1]; x++) {
    if (radek[x] == "∧" || radek[x] == "∨" || radek[x] == ">" || radek[x] == "<" || radek[x] == "x") {

    console.log("Souřadnice ryby" + count + ": " + x + " " + y);
    console.log(`Ryba${count} positionX: ${x} positionY: ${y} direction: ${radek[x]}`);
      
    // let souradniceRyb = [{jmeno: }]
    count++;
  }
}
}
// Cíle filter
let cileFilter = cilovePole(velikostPole[0], velikostPole[1]);
let counter = 0;

for(let y = 0; y < velikostPole[0]; y++) {
  let radek = cileFilter[y];

  for(let x = 0; x < velikostPole[1]; x++) {
    if (radek[x] == "#") {
    console.log("Cílova pozice ryby: " + x + " " + y);
    count++;
  }
}
}
// Maximální počet cyklů se dá vypočítat jako NSN

// 2 5 6 7 8 14 15
// 1 2 8 11




