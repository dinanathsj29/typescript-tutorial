"use strict";
exports.__esModule = true;
// specify data types of parameters, use ? to denote optional parameters 
function sum(num1, num2) {
    if (num2) {
        console.log(num1 + num2);
    }
    else {
        console.log(num1);
    }
}
sum(10, 20);
sum(100);
