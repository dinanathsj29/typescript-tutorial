"use strict";
exports.__esModule = true;
function showDetails(_person) {
    console.log("Person Details: " + _person.firstName + " " + _person.lastName + " " + _person.age);
}
var person1 = {
    firstName: 'Dinanath',
    lastName: 'Jayaswal'
};
showDetails(person1);
var person2 = {
    firstName: 'Dino',
    lastName: 'J.',
    age: 40
};
showDetails(person2);
