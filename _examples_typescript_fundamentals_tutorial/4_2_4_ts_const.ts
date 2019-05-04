// by default typescript consider all files in a folder as a module, so variables defined in one file will be checked on the fly and throws error: Cannot redeclare block-scoped variable - to solve issue use export {}

export {};

//const name; //error - const must have some value `while declaration/initialized`
// const name;

const name: string = 'Dinanath';
console.log('My name is : ' + name );

//error - const value is fixed, `not to change/re-assigned` in future
// const name: string = 'Dino';