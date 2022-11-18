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