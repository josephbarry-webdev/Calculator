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
    let remainder=numOne/numTwo;
    return remainder;
}
let numOne=20;
let numTwo=5;


function init(){

//Benchtest
console.log(add(numOne,numTwo));
console.log(subtract(numOne,numTwo));
console.log(multiply(numOne,numTwo));
console.log(divide(numOne,numTwo));

//

};