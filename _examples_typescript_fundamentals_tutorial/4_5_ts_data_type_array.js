"use strict";
// by default typescript consider all files in a folder as a module, so variables defined in one file will be checked on the fly and throws error: Cannot redeclare block-scoped variable - to solve issue use export {}
exports.__esModule = true;
var arrFrameworks = ['JavaScript', 'jQuery', 'Angular', 'React'];
console.log('arrFrameworks:', arrFrameworks);
var arrLanguages = ['C', 'C++', 'Java', 'Ruby', 'Phthon'];
console.log('arrLanguages', arrLanguages);
