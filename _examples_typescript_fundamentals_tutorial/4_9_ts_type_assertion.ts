// by default typescript consider all files in a folder as a module, so variables defined in one file will be checked on the fly and throws error: Cannot redeclare block-scoped variable - to solve issue use export {}
export {};

let id = 100;
let employeeID = <number> id;

let name = 'Dinanath';
let fName = 'Dinanath';
console.log('fName data type:',typeof(fName));

fName = fName as string;
console.log('fName data type:',typeof(fName));