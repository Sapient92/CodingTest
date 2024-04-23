let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");
let data = input[0].split(" ");
console.log(parseInt(data[0]) - 543);