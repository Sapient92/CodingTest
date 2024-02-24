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
  const A = input[0]
  const B = input[1]

  function cal(A , B) {
    const result = (A+B) * (A-B);
    return result;
  }
  console.log(cal(A,B));
  
  process.exit();
});