<<<<<<< HEAD
var colors = require("colors");

var mathFuns = {
    "+" : function(x, y) { return x + y; },
    "-" : function(x, y) { return x - y; },
    "x" : function(x, y) { return x * y; },
    "/" : function(x, y) { return x / y; },
    "^" : function(x, y) { return Math.pow(x, y); }
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

module.exports = function (equation) {
    var ops = equation.split(" ");
    var result;

    if (ops.length < 2) {
        result = Number(ops[0]);
    } else {
        var curVal = Number(ops[0]);
        var curOp = ops[1];
        for (var i = 2; i < ops.length; i++) {
            if (isNumber(ops[i])) {
                curVal = mathFuns[curOp](curVal, Number(ops[i]));
            } else {
                curOp = ops[i];
            }
        }
        result = curVal;
    }

    result = result.toString();

    if (result > 0) {
        return result.green;
    } else if (result == 0) {
        return result.yellow;
    } else {
        return result.red;
    }
}
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
