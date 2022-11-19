let input = `1
3 6
>     
 ∧    
      
  #   
 #    
      `;
// Input není redundatní na jiná čísla
let count = 0;
let countOfFish = 0;
let porovnani = true;
let pocetKroku = 0;
let vyreseno = false;
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
//////////////////////////////////////////

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
/////////////////////////////////
console.log("Cílové pole:");
console.log(cilovePole(velikostPole[0], velikostPole[1]))
///
var ryby = [[,,,]];
// Zápis souřadnic, ideálně vložit do objektu/list, vyvolat abstraktní počítání se souřadnicemi z pole vysledků
//Ryby filter
let rybyFilter = poleRyb(velikostPole[0], velikostPole[1]);
console.log("Pohled do jednoho prvku: " + rybyFilter[1][1])

for(let y = 0; y < velikostPole[0] && porovnani; y++) {
  let radek = rybyFilter[y];

  for(let x = 0; x < velikostPole[1] && porovnani; x++) {

    if (radek[x] == "x" && cileFilter[x][y] != "#") {
      console.log("NEJDE");
      porovnani = false;
    }
    if (radek[x] == "∧" || radek[x] == "∨" || radek[x] == ">" || radek[x] == "<") {
    console.log("Souřadnice ryby" + count + ": " + x + " " + y);
    console.log(`Ryba${count} positionX: ${x} positionY: ${y} direction: ${radek[x]}`);

    ryby[countOfFish[0]] = x;
    ryby[countOfFish[1]] = y;
    ryby[countOfFish[2]] = radek[x];

    // let souradniceRyb = [{jmeno: }]
    countOfFish++;
    count++;
  }
}
}

let posunDoprava = () => {
  let posX = ryby[countOfFish[0]];
  if (posX == 0) {
    ryby[countOfFish[3]]++;
    if(ryby[countOfFish[3]] == 3) {
      ryby[countOfFish[2]] = "<";
      posunDoleva();
    }
  } else {
    posX--;
  }
}
let posunDoleva = () => {
  let posX = ryby[countOfFish][0];
  if (posX == velikostPole[0]) {
    ryby[countOfFish[3]]++;
    if(ryby[countOfFish[3]] == 3) {
      ryby[countOfFish[2]] = ">";
      posunDoprava();
    }
  } else {
    posX++;
  }
}
let posunNahoru = () => {
  let posY = ryby[countOfFish[1]];
  if (posY == 0) {
    ryby[countOfFish[3]]++;
    if(ryby[countOfFish[3]] == 3) {
      ryby[countOfFish[2]] = "∨";
      posunDolu();
    }
  } else {
    posY--;
  }
}
let posunDolu = () => {
  let posY = ryby[countOfFish[1]];
  if (posY == velikostPole[1]) {
    ryby[countOfFish[3]]++;
    if(ryby[countOfFish[3]] == 3) {
      ryby[countOfFish[2]] = "∧";
      posunNahoru();
    }
  } else {
    posY++;
  }
}

let posunVsechRyb = () => {
  pocetKroku++;
  for (let i = 0; i < countOfFish; i++) {
    if (ryby[i[2]] == "∧") {
      posunNahoru()
    }
    if (ryby[i[2]] == "∨") {
      posunDolu()
    }
    if (ryby[i[2]] == ">") {
      posunDoprava()
    }
    if (ryby[i[2]] == "<") {
      posunDoleva()
    }
  }
}
let poziceX;
let poziceY;

while(!vyreseno) {
  for (let i = 0; i < countOfFish && cileFilter[ryby[i][0]][1] == "#"; i++) {
    if (i = countOfFish - 1) {
      console.log("Pocet kroku: " + pocetKroku);
      vyreseno = true;
    }
  }
  posunVsechRyb();
}



// Maximální počet cyklů se dá vypočítat jako NSN

// 2 5 6 7 8 14 15
// 1 2 8 11
 

