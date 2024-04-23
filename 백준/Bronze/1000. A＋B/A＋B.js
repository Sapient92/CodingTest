let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split(" ");

let sum = function () {
  let A = Number(input[0]);
  let B = Number(input[1]);

  return A + B;
};

console.log(sum());