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
  list = input.split(' ').map((el) => parseInt(el));
  const n = list[0];
  const array = Array.from({length:100},(_ , i) => "*".repeat(i + 1))
  if(n >= 1 && n <= 100) {
    for (let i = 0; i < n; i++) {
      console.log(array[i]);
    }
  }
  
});