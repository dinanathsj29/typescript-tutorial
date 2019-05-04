// by default typescript consider all files in a folder as a module, so variables defined in one file will be checked on the fly and throws error: Cannot redeclare block-scoped variable - to solve issue use export {}
export {};

class Greetings {
  public name: string;
  private privateName: string;
  protected protectedName: string;

  constructor(_name: string) {
    this.name = _name;
  }

  showGreet() {
    console.log(`Welcome, have a great Day ${this.name}!`)
  }

}

let greet1 = new Greetings('Dinanath');
console.log('greet1.name:',greet1.name);
greet1.showGreet();

// error - private property/variable not available outside
// console.log(greet1.privateName);

console.log(`// ------------------------------`);

// class based inheritance
class Person extends Greetings {

  constructor (pName: string) {
    super(pName);
  }

  doTask() {
    console.log('Person doing some task');
    // error - private property/variable not available outside
    // console.log(greet1.privateName);

    // protected property/variable can be accessed in derived/child class
    console.log('this.protectedName:',this.protectedName);
  }

}

let person1 = new Person('Sagar');
console.log('person1.name:',person1.name);
person1.showGreet();
person1.doTask();
