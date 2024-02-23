const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;
let list = [];

rl.on("line", (line) => {
  input = line;
  rl.close();
});

rl.on("close", () => {
  list = input.split(' ').map((el) => BigInt(el))
  const n = list[0];
  const m = list[1];
  if(1n <= m && m <= n && n <= 10n**1000n) {
    console.log((n / m).toString());
    console.log((n % m).toString());
  }
});