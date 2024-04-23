let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");
let data = input[0].split(" ")[0];

if (data >= 90) {
  console.log("A");
} else if (data >= 80 && data <= 89) {
  console.log("B");
} else if (data >= 70 && data <= 79) {
  console.log("C");
} else if (data >= 60 && data <= 69) {
  console.log("D");
} else {
  console.log("F");
}