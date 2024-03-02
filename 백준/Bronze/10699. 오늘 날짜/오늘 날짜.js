var foo = new Date().toLocaleString("en-US", { timeZone: "Asia/Seoul" });

var dateParse = foo.split(',')[0].split('/');
var year = dateParse[2];
var month = dateParse[0].padStart(2 , '0');
var day = dateParse[1].padStart(2, '0');

let today = `${year}-${month}-${day}`;
console.log(today);