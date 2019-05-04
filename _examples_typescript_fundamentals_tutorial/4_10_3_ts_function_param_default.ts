// by default typescript consider all files in a folder as a module, so variables defined in one file will be checked on the fly and throws error: Cannot redeclare block-scoped variable - to solve issue use export {}
export { };

// specify data types of parameters, use ? to denote optional parameters, one can also specify default values
function sum(num1: number, num2: number = 50) {
  console.log(num1 + num2);
}

sum(10, 20);
sum(100);