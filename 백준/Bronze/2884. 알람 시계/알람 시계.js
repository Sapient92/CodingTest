let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");
let data = input[0].split(" ");

const hour = Number(data[0]);
const minute = Number(data[1]);

function alarm() {
  if (hour !== 0 && minute >= 45) return console.log(hour, minute - 45);
  else if (hour !== 0 && minute < 45) return console.log(hour - 1, minute + 15);
  else if (hour === 0 && minute >= 45) return console.log(hour, minute - 45);
  else return console.log(23, minute + 15);
}

alarm(data);