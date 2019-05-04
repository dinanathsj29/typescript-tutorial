// by default typescript consider all files in a folder as a module, so variables defined in one file will be checked on the fly and throws error: Cannot redeclare block-scoped variable - to solve issue use export {}

export {};

let isCompleted: boolean = false;
let id: number = 101;
let firstName: string = 'Dinanath';
let lastName: string = 'Jayaswal';

console.log(`User Details: ${firstName} ${lastName} ${isCompleted} ${id} `)

let fullName;
function showFullName(_fn: string ,_ln: string ) {
  let fullName = _fn + ' ' + _ln;
  console.log(`My FullName: ${fullName}`);
}

showFullName('Dino','Jas');