<<<<<<< HEAD
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
=======
var colors = require('colors');

// calculator program

function calculate(inputString) {
    var operands = [],
        operators = [],
        input = inputString.split(' ');

    // fill operands/operators from input
    for (var ix in input) {
        if (input[ix].match(/^(\+|-|x|\/|\^)$/)) {
            operators.push(input[ix]);
        } else {
            operands.push(parseInt(input[ix]));
        }
    }

    // loop until no more operators
    while (operators.length > 0) {

        // save the current operator
        var op = operators.shift();

        // switch based on operator
        switch (op) {
            case '+':
                operands.unshift(operands.shift() + operands.shift());
                break;
            case '-':
                operands.unshift(operands.shift() - operands.shift());
                break;
            case 'x':
                operands.unshift(operands.shift() * operands.shift());
                break;
            case '/':
                operands.unshift(operands.shift() / operands.shift());
                break;
            case '^':
                operands.unshift(Math.pow(operands.shift(), operands.shift()));
                break;
        }
    }

    var result = operands[0] + ''; //coerces to string type

    // colors
    if (operands[0] < 0) {
        return result.red;
    } else if (operands[0] === 0) {
        return result.yellow;
    } else {
        return result.green;
    }
}

module.exports = calculate;
>>>>>>> master
