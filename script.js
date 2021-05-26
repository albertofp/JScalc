const clearButton   =   document.querySelector("[button-clear]");
const equalsButton  =   document.querySelector("[button-equals]");
const operators     =   document.querySelectorAll("[operator-button]");
const numberButtons =   document.querySelectorAll("[number-button]");
const deleteButton  =   document.querySelector("[button-delete]");
const pointButton   =   document.querySelector("[point-button]");
const outputScreen  =   document.querySelector('#outputScreen');


let operand1   =  "";
let operand2   =  "";
let currentOperation  = null;
let shouldResetDisplay = false;

numberButtons.forEach((button) =>
  button.addEventListener("click", () => outputConcat(button.textContent))
);

numberButtons.forEach((button) =>
  button.addEventListener("click", () => setOperand(button.textContent))
);

operators.forEach((button) =>
  button.addEventListener("click", () => outputConcat(button.textContent))
);

operators.forEach((button) =>
  button.addEventListener("click", () => currentOperation = button.textContent)
);




clearButton.addEventListener("click", clrScreen);
equalsButton.addEventListener("click", operate);


//Concatenates output to show the calculation being processed on screen
function outputConcat(value) {
  if(outputScreen.textContent == 0) resetDisplay();
  outputScreen.textContent = outputScreen.textContent + " " + value + " ";
}

// output to calculator screen
function outputToScreen(output) {
    outputScreen.textContent = output;
}

function resetDisplay() {
    outputScreen.textContent = "";
    shouldResetDisplay      = false;    
  }

//Returns variables to their initial values before the user can start a new operation
function clrScreen(){
    outputScreen.textContent = "0";
    operand1          = "";
    operand2          = "";
    currentOperation  = null;
    shouldResetDisplay= false;   
}

//Sets the current operands
function setOperand(value){
  if(operand1 = null){
    operand1 = value;
  }
  else if (operand2 = null){
    operand2 = value;
    shouldResetDisplay = true;
  }
}

function divide(a,b){
    try {
        return (a / b);
    } catch (error) {
        alert("Error: cannot divide by 0.");
    }
}

function operate(operator,operand1,operand2) {
    x = Number(operand1);
    y = Number(operand2);
    switch (operator) {
        case "+":
          outputToScreen(a + b);
          operand1 = a + b;
        case "−":
          return a - b;
          operand1 = a - b;
        case "×":
          return a * b;
          operand1 = a * b;
        case "÷":
          if (b === 0) return null;
          else return divide(a,b);
          operand1 = divide(a,b);
        default:
          return null;
}
}



