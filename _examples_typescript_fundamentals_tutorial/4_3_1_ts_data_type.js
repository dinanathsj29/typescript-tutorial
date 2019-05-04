"use strict";
// by default typescript consider all files in a folder as a module, so variables defined in one file will be checked on the fly and throws error: Cannot redeclare block-scoped variable - to solve issue use export {}
exports.__esModule = true;
var isCompleted = false;
var id = 101;
var firstName = 'Dinanath';
var lastName = 'Jayaswal';
console.log("User Details: " + firstName + " " + lastName + " " + isCompleted + " " + id + " ");
var fullName;
function showFullName(_fn, _ln) {
    var fullName = _fn + ' ' + _ln;
    console.log("My FullName: " + fullName);
}
showFullName('Dino', 'Jas');
