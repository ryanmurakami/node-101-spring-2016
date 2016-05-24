// solution.js (called by test.js)
// module.exports = function (equation) {
//      return '<Your result here>';
//  }

// function equation (Result) {

    var colors = require('colors');
    var Result;
    var NextOperand;
    var Operator;
    var IndexStart;

    IndexStart = 4; // assume min 2 operands and go directly to 4th arg to start calc

    Result = Number(process.argv[2]);
    for (var i=IndexStart; i < process.argv.length; i+=2) {
        NextOperand = Number(process.argv[i]);
        Operator = (process.argv[i-1]);
        if (Operator === '+') {
            Result = Result + NextOperand;
        } else if (Operator === '-') {
            Result = Result - NextOperand;
        } else if (Operator === 'x') {
            Result = Result * NextOperand;
        } else if (Operator === '*') {
            Result = Result * NextOperand;
        } else if (Operator === '/') {
            Result = Result / NextOperand;
        } else if (Operator === '^') {
            Result = Math.pow(Result, NextOperand);
        } else  {
            //return('Operator not supported: ', Operator);
        }
    }

    //  Color Result
        // If the result is greater than 0, use green :: 123
        // If the result is equal to 0, use yellow :: 0
        // If the result is less than 0, use red :: -123
    //
    if (Result > 0) {
        console.log(colors.green(Result));
        return(colors.green(Result));
    } else if (Result === 0) {
        console.log(colors.yellow(Result));
        return(colors.yellow(Result));
    } else if (Result < 0) {
        console.log(colors.red(Result));
        return(colors.red(Result));
    } else {
        return('Invalid result');
    }

// }
// module.exports = equation;
