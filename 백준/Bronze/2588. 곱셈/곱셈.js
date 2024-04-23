let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

const a = parseInt(input[0]) * parseInt(input[1][2]);
const b = parseInt(input[0]) * parseInt(input[1][1]);
const c = parseInt(input[0]) * parseInt(input[1][0]);
const d = a + b * 10 + c * 100;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
