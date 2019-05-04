// by default typescript consider all files in a folder as a module, so variables defined in one file will be checked on the fly and throws error: Cannot redeclare block-scoped variable - to solve issue use export {}

export {};

let data1:string = 'Data1'

//error - string type can not accept number or other data
// data1 = 50; 

// any data type variable can store any type of value, there are no data checking 
let data2:any = 'Data2';
data2 = 50;
data2 = true;
data2 = ['Hi','Hey','Good','Hello'];

console.log(data2);