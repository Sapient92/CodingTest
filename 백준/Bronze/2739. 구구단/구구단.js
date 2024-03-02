const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split(' ').map(el => parseInt(el));
}).on('close', function(){
	const N = parseInt(input[0]);
    if (N >= 1 && 9 >= N) {
        for (let i = 1; i < 10; i++) {
            console.log(`${N} * ${i} = ${N * i}`);
        }
    }

    process.exit();
});