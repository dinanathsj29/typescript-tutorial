// by default typescript consider all files in a folder as a module, so variables defined in one file will be checked on the fly and throws error: Cannot redeclare block-scoped variable - to solve issue use export {}
export {};

let details; //data type not infered
console.log('type of details:', typeof(details));

let cityName = 'Human'; // hover on cityName to check type details let cityName: string
console.log('type of cityName:', typeof(cityName));

//Error - Type '90' is not assignable to type 'string'.ts(2322), cant assign number to string data type
//cityName = 90 
