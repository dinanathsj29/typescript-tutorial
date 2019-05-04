// by default typescript consider all files in a folder as a module, so variables defined in one file will be checked on the fly and throws error: Cannot redeclare block-scoped variable - to solve issue use export {}

export {};

let arrFrameworks: string [] = ['JavaScript','jQuery','Angular','React'];
console.log('arrFrameworks:',arrFrameworks);


let arrLanguages: Array<string> = ['C','C++','Java','Ruby','Phthon'];
console.log('arrLanguages',arrLanguages);
