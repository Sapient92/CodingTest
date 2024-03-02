const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split(' ').map(el => parseInt(el));
}).on('close', function(){
	const A = parseInt(input[0]);
    if ( A=>0 && A <= 100) {
        if (A >= 90) {
            console.log('A');
        } else if (A >= 80) {
            console.log('B');
        } else if (A >= 70) {
            console.log('C');
        } else if (A >= 60) {
            console.log('D');
        } else {
            console.log('F');
        }
    }
    process.exit();
});