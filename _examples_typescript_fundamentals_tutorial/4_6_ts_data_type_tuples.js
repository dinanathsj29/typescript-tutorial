"use strict";
// by default typescript consider all files in a folder as a module, so variables defined in one file will be checked on the fly and throws error: Cannot redeclare block-scoped variable - to solve issue use export {}
exports.__esModule = true;
var arrFrameworksDetails = ['JavaScript', 7.0];
console.log('arrFrameworksDetails:', arrFrameworksDetails);
console.log('arrFramework Name:', arrFrameworksDetails[0]);
console.log('arrFramework version:', arrFrameworksDetails[1]);
