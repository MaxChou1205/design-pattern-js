class Person {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

class PersonFactory {
  createPerson(name) {
    return new Person(PersonFactory.id++, name);
  }
}
PersonFactory.id = 0;

let person1 = new PersonFactory().createPerson("person1");
let person2 = new PersonFactory().createPerson("person2");
let person3 = new PersonFactory().createPerson("person3");
console.log(person1);
console.log(person2);
console.log(person3);
