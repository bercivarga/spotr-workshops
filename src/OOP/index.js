// Recap on objects

const me = {
  name: "Berci",
  age: 24,
  isCool: true,
  sayHi() {
    console.log(`Hi! I'm ${this.name}!`);
  },
};

// Creating objects through functions

function createPerson(name, age, isCool) {
  return {
    name,
    age,
    isCool,
    sayHi() {
      console.log(`Hi! I'm ${this.name}!`);
    },
  };
}

const john = createPerson("John", 32, false);

// Constructing objects through functions, aka introduction to constructors

function Person(name, age, isCool) {
  this.name = name;
  this.age = age;
  this.isCool = isCool;

  this.sayHi = function () {
    console.log(`Hi! I'm ${this.name}!`);
  };
}

const jesse = new Person("Jesse", 25, true);

// From constructors to classes

class PersonClass {
  name;
  age;
  isCool;

  constructor(name, age, isCool) {
    this.name = name;
    this.age = age;
    this.isCool = isCool;
  }

  sayHi() {
    console.log(`Hi! I'm ${this.name}!`);
  }
}

const jerome = new PersonClass('Jerome', 29, true);