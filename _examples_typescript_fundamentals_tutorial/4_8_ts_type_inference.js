"use strict";
exports.__esModule = true;
var details; //data type not infered
console.log('type of details:', typeof (details));
var cityName = 'Human'; // hover on cityName to check type details let cityName: string
console.log('type of cityName:', typeof (cityName));
//Error - Type '90' is not assignable to type 'string'.ts(2322), cant assign number to string data type
//cityName = 90 
