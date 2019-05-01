// by default typescript consider all files in a folder as a module, so variables defined in one file will be checked on the fly and throws error: Cannot redeclare block-scoped variable - to solve issue use export {}

export {};

// write valid javascript, basic javascript/typescript
console.log('Welcome to typescript');
// ------------------------------

//type annotation to eliminate any data variable type error
let name:string = 'Dinanath';
//name=123; // error
console.log('My Name is: ' + name);
