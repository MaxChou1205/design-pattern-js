class Singleton {
  constructor() {
    const instance = this.constructor.instance;
    if (instance) {
      return instance;
    }

    this.constructor.instance = this;
  }

  foo() {
    console.log("Doing something");
  }
}

let s1 = new Singleton();
let s2 = new Singleton();

console.log(s1 === s2);
s1.foo();

// -----------
// monostate

class CEO {
  get name() {
    return CEO._name;
  }
  set name(value) {
    CEO._name = value;
  }

  get age() {
    return CEO._age;
  }
  set age(value) {
    CEO._age = value;
  }

  toString() {
    return `name is ${this.name} and age is ${this.age}`;
  }
}
CEO._name = null;
CEO._age = null;

let ceo1 = new CEO();
ceo1.name = "David";
ceo1.age = 30;

let ceo2 = new CEO();
ceo2.name = "Peter";
ceo2.age = 60;

console.log(ceo1.toString());
console.log(ceo2.toString());
