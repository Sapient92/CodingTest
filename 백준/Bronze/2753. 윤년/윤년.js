const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split(' ').map(el => parseInt(el));
}).on('close', function(){
	const year = parseInt(input[0]);
    
    if (year >= 1 && 4000 >= year) {
        if (year % 4 === 0 && year % 100 !==0) {
            console.log(1);
        } else if (year % 4 === 0 && year % 400 === 0) {
            console.log(1);
        } else {
            console.log(0);
        }
    }

    process.exit();
});