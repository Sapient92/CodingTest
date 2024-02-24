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
  const A = input[0];
  const B = input[1];

  console.log(A * B);
  process.exit();
});