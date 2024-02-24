const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
   const foo = Number(input[0]);
   const bar = Number(input[1]);
    console.log("a =", foo);
    console.log("b =", bar);
});