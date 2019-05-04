// by default typescript consider all files in a folder as a module, so variables defined in one file will be checked on the fly and throws error: Cannot redeclare block-scoped variable - to solve issue use export {}

export {};

let name: string = 'Dinanath';
let age: number = 35;
let isDeveloper: boolean = true;
console.log('My details are : ' + name + ' ' + age + ' ' + isDeveloper);

// let variables not be re-declared
// let name: string = 'Dino';