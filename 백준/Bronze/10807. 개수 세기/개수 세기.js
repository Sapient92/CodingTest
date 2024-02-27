const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let search = [];

rl.on("line", (line) => {
  input.push(line);
  if (input.length === 2) {
    search = input[1].split(" ").map((el) => parseInt(el));
  }
  if (input.length === 3) {
    rl.close();
  }
});

rl.on("close", () => {
  const N = parseInt(input[0]);
  const v = parseInt(input[2]);
  let sum = 0;

  for (let i = 0; i < search.length; i++) {
    if (v === search[i]) {
      sum += 1;
    }
  }
  console.log(sum);
});