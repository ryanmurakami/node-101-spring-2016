var ArgStart;
var Test;
var ArgSum;
var ArgNumMax;
var ArgNumCount;

ArgStart = 2; // ignore first two arguments
ArgSum = 0;
ArgNumCount = 0;

for (var i = ArgStart; i < process.argv.length; i++) {
    if (isNaN(Number(process.argv[i]))) {
       //LYN// console.log("Not a number:", (process.argv[i]))
    } else {
        ArgNumCount++;
        ArgSum += Number(process.argv[i]);
    }
 }

//LYN// console.log("Count of first three arguments passed as numbers: ", ArgNumCount);
//LYN// console.log("Sum of first three arguments passed as numbers: ", ArgSum);
console.log(ArgSum); //Specific to learnyounode test
