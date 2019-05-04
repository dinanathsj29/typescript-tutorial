// by default typescript consider all files in a folder as a module, so variables defined in one file will be checked on the fly and throws error: Cannot redeclare block-scoped variable - to solve issue use export {}
export {};

// specify data types of parameters
function sum(num1: number, num2: number) {
  console.log(num1 + num2);
}

sum(10, 20);

//error - only numbers allowed
// sum('one','two');

// specify data types of parameters as well function return type
function showGreetings(message: string): string {
  return message;
}
let message1 = showGreetings('Welcome to Typescript');
console.log(message1);
