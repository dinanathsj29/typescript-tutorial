"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Greetings = /** @class */ (function () {
    function Greetings(_name) {
        this.name = _name;
    }
    Greetings.prototype.showGreet = function () {
        console.log("Welcome, have a great Day " + this.name + "!");
    };
    return Greetings;
}());
var greet1 = new Greetings('Dinanath');
console.log('greet1.name:', greet1.name);
greet1.showGreet();
// error - private property/variable not available outside
// console.log(greet1.privateName);
console.log("// ------------------------------");
// class based inheritance
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person(pName) {
        return _super.call(this, pName) || this;
    }
    Person.prototype.doTask = function () {
        console.log('Person doing some task');
        // error - private property/variable not available outside
        // console.log(greet1.privateName);
        // protected property/variable can be accessed in derived/child class
        console.log('this.protectedName:', this.protectedName);
    };
    return Person;
}(Greetings));
var person1 = new Person('Sagar');
console.log('person1.name:', person1.name);
person1.showGreet();
person1.doTask();
