function add(numOne, numTwo){
    let sum=numOne+numTwo;
    return sum;
}
function subtract(numOne, numTwo){
    let difference=numOne-numTwo;
    return difference;
}
function multiply(numOne, numTwo){
    let product=numOne*numTwo;
    return product;
}
function divide(numOne, numTwo){
    let remainder;
    if(numTwo===0){
        alert("No division by zero silly");
        remainder=0;
    }
    else{
        remainder=numOne/numTwo;
    }
    return remainder;
}
function operate(numOne, operator, numTwo){
    switch (operator){
        case '+' :
            solution=add(numOne,numTwo)
            break;

        case '-':
            solution=subtract(numOne, numTwo)
            break;

        case 'x':
            solution=multiply(numOne, numTwo)
            break;

        case '/':
            solution= divide(numOne,numTwo)
            break;

        default:
            console.log("Needs 2 numbers and an operator: currently "+numOne+" "+operator+ " "+numTwo);    
    }

}

function clearString(){
    tempNumber="";
    displayString="0"
    populateDisplay();
    displayString="";
}
//|| numRegPlus.test(displayString)

function inputNumber(input){
   
   if(solution!=null){
       if(opReg.test(displayString[displayString.length-1])){
        displayString+=input;
       }
       else{
        displayString=String(input);
       }
    tempNumber=String(input);
    solution=null;
    
   }
   else{
       
   displayString+=input;
   tempNumber+=input;
   }

    console.log(tempNumber);
    //if display is one number 
    if(numReg.test(tempNumber)){
        
    }
    else if(input.length==2){
        displayString=displayString.substring(0,displayString.length-2);
        tempNumber=tempNumber.substring(0,tempNumber.length-2);
    }
    else {
        displayString=displayString.substring(0,displayString.length-1);
        tempNumber=tempNumber.substring(0,tempNumber.length-1);
        
    }
    
    populateDisplay();
    
}
//Done
function getOperator(symbol){
    console.log(tempNumber);
    //if display contains 1 instance of operator do nothing
    if(opReg.test(displayString)){
       
    }
    //else add operator symbol to string, store numOne and Operator
    else{
        numOne=Number(tempNumber);
        operator=symbol;
        displayString+=symbol;
        tempNumber="";
        //
    
    }
    populateDisplay();
}
function equals(){
    if(solution===null){
    numTwo=Number(tempNumber);
   operate(numOne, operator, numTwo);
   displayString=String(solution);
   console.log(displayString);
   populateDisplay();

   tempNumber=String(solution);
   //
   //solution=null;
   
   console.log(solution);
   //
    }
}

//this function should only display
//TO DO: ADD COMMAS EVERY 3 CHARACTERS
function populateDisplay(){
    let display=document.getElementById("textInput");
    display.innerHTML=displayString;

    return;

}

//global variables


const numReg = /^(\d)*(\.)?(\d){0,2}$/;
const numRegPlus =/^(\d)*(\.)?(\d){0,2}[\+\-\x\/]{1}$/;
const opReg = /[\+\-\x\/]{1}/;


let displayString="0";
let tempNumber="";
let numOne=0;
let numTwo=0;
let operator='';
let solution=-1;



function init(){
    populateDisplay();
    displayString="";

/*
    let numOne=20;
    let numTwo=4;
    let operator='/';

    let realNum=3032265.9;
    let symbol='+';
    let expression="234.32/";

    Benchtest
console.log(add(numOne,numTwo));
console.log(subtract(numOne,numTwo));
console.log(multiply(numOne,numTwo));
console.log(divide(numOne,numTwo));

operate(numOne,operator,numTwo);
console.log(solution);


console.log(numReg.test(realNum));
console.log(opReg.test(symbol));
console.log(numRegPlus.test(expression));

Bugs to fix:
Account for negative numbers
*/
};