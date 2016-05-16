function NaiveCalculator(equation)
{
    this.splitTokens = function()
    {
        return equation.split(' ');
    }
    
    this.applyOperation = function (operand1, operation, operand2) {
        var resultOfOperation;
        switch(operation)
        {
            case '+':
                resultOfOperation = operand1 + operand2;
                break;
            case '-':
                resultOfOperation = operand1 - operand2;
                break;
            case '/':
                resultOfOperation = operand1 / operand2;
                break;
            case 'x':
            case 'X':
                resultOfOperation = operand1 * operand2;
                break;
            case '^':
                resultOfOperation = Math.pow(operand1, operand2);
                break;
        }
        
        return resultOfOperation;
    }
    
    this.colorize = function (param)
    {
        var retValue;
        if (param > 0)
        {
            retValue = (param.toString() .green);
        }
        else if (param < 0)
        {
            retValue = (param.toString() .red);
        }
        else if (param === 0)
        {
            retValue = (param.toString() .yellow);
        }
        
        return retValue;
    }
    
    this.evaluate = function ()
    {
        var tokens = splitTokens();
        var operand1;
        var currentToken;
        
        for(var currentTokenCtr = 0; currentTokenCtr < tokens.length; currentTokenCtr++)
        {
            currentToken = tokens[currentTokenCtr]
            var potentialOperand = parseFloat(currentToken);
            
            if (!isNaN(potentialOperand))
            {
                operand1 = parseInt(currentToken);
            }
            else
            {
                operand1 = applyOperation(operand1, currentToken, 
                    parseFloat(tokens[++currentTokenCtr]));
            }
        }
        
        return operand1;
    }
    
    var result = evaluate();
    return colorize(result);
}

module.exports = function (equation) {
    return NaiveCalculator(equation);
}