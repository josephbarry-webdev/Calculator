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
function operate(numOne, operator, numTwo){
    switch (operator){
        case '+' :
            solution=add(numOne,numTwo)
            break;

        case '-':
            solution=subtract(numOne, numTwo)
            break;

        case '*':
            solution=multiply(numOne, numTwo)
            break;

        case '/':
            solution= divide(numOne,numTwo)
            break;

        default:
            console.log("Needs 2 numbers and an operator."+operator);    
    }

}

let solution=null;
function init(){
    let numOne=20;
    let numTwo=4;
    let operator='/';
    
    




    //Benchtest
console.log(add(numOne,numTwo));
console.log(subtract(numOne,numTwo));
console.log(multiply(numOne,numTwo));
console.log(divide(numOne,numTwo));

operate(numOne,operator,numTwo);
console.log(solution);
//

};