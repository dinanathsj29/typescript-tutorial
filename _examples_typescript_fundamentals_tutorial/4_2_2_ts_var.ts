// by default typescript consider all files in a folder as a module, so variables defined in one file will be checked on the fly and throws error: Cannot redeclare block-scoped variable - to solve issue use export {}

export {};

var name: string = 'Dinanath';
var age: number = 35;
var isDeveloper: boolean = true;
console.log('My details are : ' + name + ' ' + age + ' ' + isDeveloper);

var name = 'Dino';
console.log('My name is : ' + name);
