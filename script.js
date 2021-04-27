var outputScreen = document.querySelector('#outputScreen');
 
 function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    try {
        return (a / b);
    } catch (error) {
        alert("Error: cannot divide by 0.");
    }
}

function operate(operator,operand1,operand2) {
        switch (operator) {
            case add:
                return add(operand1,operand2);
                break;
            case subtract:
                return subtract(operand1,operand2);
                break;

            case multiply:
                return multiply(operand1,operand2);
                break;
            case divide:
                return divide(operand1,operand2);
                break;
            //default:
                //break;
        }
}

var outputScreen = document.querySelector('#outputScreen');

