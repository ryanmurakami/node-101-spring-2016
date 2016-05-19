// Christopher Nixon
// Monday, May 8, 2016
// Expedia Code Academy node.js 101
// Homework 2

var length = process.argv.length;
var sum = 0;

for(i=2; i < length; i++) {
    sum = sum + Number(process.argv[i]);
}

console.log(sum);