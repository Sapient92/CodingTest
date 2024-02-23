const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
  rl.close();
});

rl.on("close", () => {
  const n = parseInt(input[0]);
  let sum = 0;

  if (n >= 1 && n <= 10000) {
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
  }
  console.log(sum);
});