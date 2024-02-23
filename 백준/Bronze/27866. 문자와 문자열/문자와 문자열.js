const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
  if (input.length === 2) {
    rl.close();
  }
  
});

rl.on("close", () => {
  const str = input[0];
  const num = parseInt(input[1]);

  if(str.length >= 1 && str.length <= 1000) {
    if(num >= 1 && num <= str.length) {
      console.log(str[num - 1]);
    } else {
        console.log('잘못된 숫자 입니다.');
    }
  } else{
      console.log('잘못된 문자열 입니다.')
  }
});
