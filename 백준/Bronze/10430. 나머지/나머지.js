let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let data = input[0].split(" ");
const a = parseInt(data[0]);
const b = parseInt(data[1]);
const c = parseInt(data[2]);

console.log((a + b) % c);
console.log(((a % c) + (b % c)) % c);
console.log((a * b) % c);
console.log(((a % c) * (b % c)) % c);
