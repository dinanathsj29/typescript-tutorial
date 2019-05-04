// by default typescript consider all files in a folder as a module, so variables defined in one file will be checked on the fly and throws error: Cannot redeclare block-scoped variable - to solve issue use export {}
export {};

interface Person {
  firstName: string;
  lastName: string;
  age?: number
}

function showDetails (_person: Person) {
  console.log(`Person Details: ${_person.firstName} ${_person.lastName} ${_person.age}`); 
}

let person1 = { 
  firstName: 'Dinanath',
  lastName: 'Jayaswal',
}

showDetails(person1);

let person2 = { 
  firstName: 'Dino',
  lastName: 'J.',
  age: 40
}

showDetails(person2);