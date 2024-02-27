const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input = line.split(" ").map((element) => parseInt(element));
  rl.close();
});

rl.on("close", () => {
  let N = input[0];
  let M = input[1];
  console.log(Math.abs(N - M));
  
  process.exit();
});