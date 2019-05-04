"use strict";
exports.__esModule = true;
// specify data types of parameters
function sum(num1, num2) {
    console.log(num1 + num2);
}
sum(10, 20);
//error - only numbers allowed
// sum('one','two');
// specify data types of parameters as well function return type
function showGreetings(message) {
    return message;
}
var message1 = showGreetings('Welcome to Typescript');
console.log(message1);
