const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let count = 0;

rl.on("line", (line) => {
    input = line.split(" ").map((element) => parseInt(element));
    rl.close();
});

rl.on("close", () => {
  let N = Math.abs(input[0]);
   if (N > 0 && N <= 12) {
       let sum = 1;
    for (let i = 1; i <= N; i++){
        sum *= i;
    } console.log(sum);
   } else if( N == 0 ) {
    console.log(1);
   }

  
  process.exit();
});