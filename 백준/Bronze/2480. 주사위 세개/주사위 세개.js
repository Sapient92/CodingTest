let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");
let data = input[0].split(" ");
let [a, b, c] = data.map(Number);
if (a === b && b === c) {
  console.log(10000 + a * 1000);
} else if (a === b || b === c || a === c) {
  if (a === b) {
    console.log(1000 + a * 100);
  } else console.log(1000 + c * 100);
} else console.log(Math.max(a, b, c) * 100);
