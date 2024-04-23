let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");
input = input[0].split(" ");

let A = parseInt(input[0]);
let B = parseInt(input[1]);

console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(Math.floor(A / B));
console.log(A % B);