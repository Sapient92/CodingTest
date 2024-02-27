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
  let N = input[0];
  if (N <= 100000) {
      let output = "";
   for(let i = 1; i <= N; i++ ) {
    output += i + "\n"; 
   }
      console.log(output);
  }  

  
  process.exit();
});