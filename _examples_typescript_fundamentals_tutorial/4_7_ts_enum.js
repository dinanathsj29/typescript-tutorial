"use strict";
exports.__esModule = true;
var RGBColor;
(function (RGBColor) {
    RGBColor[RGBColor["Red"] = 0] = "Red";
    RGBColor[RGBColor["Green"] = 1] = "Green";
    RGBColor[RGBColor["Blue"] = 2] = "Blue";
})(RGBColor || (RGBColor = {}));
;
console.log('RGBColor:', RGBColor);
console.log('RGBColor.Green:', RGBColor.Green);
var colorBlue = RGBColor.Blue;
console.log('colorBlue:', colorBlue);
var Cities1;
(function (Cities1) {
    Cities1[Cities1["Mumbai"] = 10] = "Mumbai";
    Cities1[Cities1["Delhi"] = 20] = "Delhi";
    Cities1[Cities1["Kolkata"] = 30] = "Kolkata";
    Cities1[Cities1["Chennai"] = 40] = "Chennai";
    Cities1[Cities1["Bangalore"] = 50] = "Bangalore";
})(Cities1 || (Cities1 = {}));
console.log('Cities:', Cities1);
console.log('Bangalore:', Cities1.Bangalore);
var Cities2;
(function (Cities2) {
    Cities2["Mumbai"] = "M";
    Cities2["Delhi"] = "D";
    Cities2["Kolkata"] = "K";
    Cities2["Chennai"] = "C";
    Cities2["Bangalore"] = "B";
})(Cities2 || (Cities2 = {}));
console.log('Cities:', Cities2);
console.log('Bangalore:', Cities2.Bangalore);
