// calculator program

var operands = [],
    operators = [],
    input = process.argv.slice(2);

// fill operands/operators from input
for (var ix in input) {
    if (input[ix].match(/\+|-|\*|\//)) {
        operators.push(input[ix]);
    } else {
        operands.push(parseInt(input[ix]));
    }
}

// loop until no more operators
while (operators.length > 0) {
    
    // save the current operator
    var op = operators.pop();
    
    // switch based on operator
    switch (op) {
        case '+':
            operands.push(operands.pop() + operands.pop());
            break;
        case '-':
            operands.push(operands.pop() - operands.pop());
            break;
        case '*':
            operands.push(operands.pop() * operands.pop());
            break;
        case '/':
            operands.push(operands.pop() / operands.pop());
            break;
    }
}

// output the correct
console.log(operands[0]);