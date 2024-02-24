const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let count = 0;

rl.on("line", (line) => {
  input.push(parseInt(line));
  count++
  
  if (count == 2) {
    rl.close();
  }
});

rl.on("close", () => {
  let [x, y] = input;

  if (x > 0) {
    y > 0 ? console.log('1') : console.log('4');
  } else {
    y > 0 ? console.log('2') : console.log('3');
  }
  process.exit();
});