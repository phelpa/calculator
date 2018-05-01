clickedEqual = false;

var display = document.querySelector("#display");

var allOperands = document.querySelectorAll(".operand");

var sumButton = document.querySelector("#add");
sumButton.addEventListener("click",saveVariable);

var multiplyButton = document.querySelector("#multiply");
multiplyButton.addEventListener("click", saveVariable);

var divideButton = document.querySelector("#divide");
divideButton.addEventListener("click",saveVariable);

var subtractButton = document.querySelector("#subtract");
subtractButton.addEventListener("click", saveVariable);

var equalButton = document.querySelector("#equal");
equalButton.addEventListener("click",equalsTo);

var clearButton = document.querySelector("#clear");
clearButton.addEventListener("click",clearDisplay);


function equalsTo(){
    saveSecondVariable();
    display.textContent = operate(operator,Number(displayValue), Number(displayValue2));
    clickedEqual = true;
}


function saveVariable(){
    displayValue = display.textContent;
    operator = this.getAttribute('id');
    console.log(operator);
    clearDisplay();    
}


function saveSecondVariable(){
    displayValue2 = display.textContent;
    clearDisplay();
}


function clearDisplay(){
    display.textContent = null;
}


/* ------------------------------------------ */

allOperands.forEach(function (element,index){
  element.addEventListener("click",writeInDisplay);
})

function writeInDisplay(){
  if(clickedEqual === false){
  display.textContent = display.textContent + this.textContent;
  } else if (clickedEqual === true){
      clearDisplay();
      display.textContent = display.textContent + this.textContent;
      clickedEqual=false;
  }
}
  
function operate(operator, x, y){
    
    switch(operator) {
            
        case 'add':
            return add(x,y);
            break;
            
        case 'subtract':
            return subtract(x,y);
            break;
            
        case "multiply":
            return multiply([x,y]);
            break;
            
        case 'divide':
            return divide([x,y]);
            break;
            
   
    }
    
    
}   
    
    
function add(a, b){
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function sum(array) {
  return array.reduce((current, total) => total + current, 0);
}

function multiply(array) {
  return array.reduce((total, current) => total * current, 1);
}

function divide(array) {
  return array.reduce((total, current) => total / current);
}    
    
function power(a, b) {
  return Math.pow(a, b);
}

