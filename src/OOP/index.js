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
// {
//   name: 'Jesse',
//   age: 25,
//   isCool: true,
//   sayHi: function() {
//     console.log(`Hi! I'm ${jesse.name}!`);
//   }
// }

// From constructors to classes

class PersonClass {
  name;
  age = 29;
  #isCool = true;

  constructor(name, age, isCool) {
    this.name = name;
    this.age = age;
    this.#isCool = isCool;
  }

  sayHi() {
    console.log(`Hi! I'm ${this.name}!`);
  }
}

const jerome = new PersonClass('Jerome');

// Child and parent classes, with private fields (briefly touch upon static properties and methods)

class Employee extends PersonClass {
  role;
  #salary;

  constructor(name, age, isCool, role, salary) {
    super(name, age, isCool)
    this.role = role;
    this.#salary = salary;



  }

  introduce() {
    super.sayHi(); // can be written as `this.sayHi()` as well
    console.log(`I'm a ${this.role}. I'm ${this.isCool}`);
  }

  sayEarnings() {
    console.log(`I make ${this.#salary} a month. 💸💸💸`)
  }
}

const david = new Employee('David', 27, true, 'Mendix developer', 1000000);
// david.introduce();

// david.introduce()
// david.sayEarnings()

// PersonClass is Employee's prototype.
// Prototypes are fundamental to OOP. They allow us to define properties and methods that we can share amongst classes,
// without the need to constantly re-declare them.

// console.log('Jesse is a: ', Object.getPrototypeOf(jesse))
// console.log('Jerome is a: ', Object.getPrototypeOf(jerome))
// console.log('David is a: ', Object.getPrototypeOf(david))

// Try searching `prototype` on MDN! Seems like every method has a prototype. 🥸

// [1, 2, 3].

class JeromesArr extends Array {
  constructor() {
    super()
  }
}

const sample = new JeromesArr();
console.log((sample))

Array.prototype.logSomething = function() { console.log('something') }

new Array().logSomething()

const str = ''
const obj = {}
const String = {
  reverse(str) {
    // ..
  }
}

'something'.reverse();
