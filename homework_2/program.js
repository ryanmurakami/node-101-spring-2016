// the BABY STEPS program
var sum = 0;
for (var i=2; i<process.argv.length; i++){
    sum += Number(process.argv[i])
}

console.log(sum);

// the FIRST I/O program
// var fs = require('fs')

// var myFileBuffer = fs.readFileSync(process.argv[2])

// var lines = myFileBuffer.toString().split('\n') - 1

// console.log(lines)
