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

const berci = createPerson('Berci', 24, true);
