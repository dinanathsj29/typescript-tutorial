"use strict";
exports.__esModule = true;
// specify data types of parameters, use ? to denote optional parameters, one can also specify default values
function sum(num1, num2) {
    if (num2 === void 0) { num2 = 50; }
    console.log(num1 + num2);
}
sum(10, 20);
sum(100);
