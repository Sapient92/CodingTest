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
  let A = input[0];
  let B = input[1];
    const result = A / B;
    console.log(Number(result.toFixed(11)));


  process.exit();
});