const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [[]];

rl.on("line", (line) => {
    input = line.split(" ").map((element) => parseInt(element));
    rl.close();
});

rl.on("close", () => {
  function answer(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i]**2
    }
    return result % 10;
  }
  console.log(answer(input));
});