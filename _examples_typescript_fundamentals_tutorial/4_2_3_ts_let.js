"use strict";
// by default typescript consider all files in a folder as a module, so variables defined in one file will be checked on the fly and throws error: Cannot redeclare block-scoped variable - to solve issue use export {}
exports.__esModule = true;
var name = 'Dinanath';
var age = 35;
var isDeveloper = true;
console.log('My details are : ' + name + ' ' + age + ' ' + isDeveloper);
// let variables not be re-declared
// let name: string = 'Dino';
