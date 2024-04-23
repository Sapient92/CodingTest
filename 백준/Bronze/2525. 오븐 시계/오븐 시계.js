let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");
let data = input[0].split(" ");

let hour = Number(data[0]);
let minute = Number(data[1]);
let time = Number(input[1]);
if (minute + time >= 60) {
  hour = hour + parseInt((minute + time) / 60);
  minute = (minute + time) % 60;
  if (hour >= 24) {
    hour -= 24;
  }
} else {
  minute += time;
}

console.log(hour, minute)
