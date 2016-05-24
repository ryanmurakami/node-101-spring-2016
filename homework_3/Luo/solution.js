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
