// Logging to the console
// console.log('Hello world!');

// Variables
var myFirstVariable = 'Berci';
let xasd = ''
const yasdasd = ''
// console.log(myFirstVariable);

// Primitive data types --> Strings, Numbers, Booleans
const otherString = 'Hello'

const combineStr = `${otherString} ${myFirstVariable}!`

const myFirstNumber = "12";
// console.log(myFirstNumber + 12);

const myFirstBoolean = true;
// console.log(myFirstBoolean)

const nullVar = null;
// console.log(nullVar)

let someVal;
// console.log(someVal)
someVal = true;
// console.log(someVal)


// Control flow
const x = 3

if (x < 5 && x > 0) {
  // console.log('x smaller than 5 and more than 0');
} else if (x !== 5) {
  // console.log('x is NOT 5');
} else {
  // console.log('x is larger than 5');
}

// === == < > <= >= !==
// && ||

// Loops
let counter = 0;

// while (counter < 10) {
//   console.log(counter)
//   counter = counter + 1
// }

for (let i = 10; i === 0; i--) {
  // console.log(i);
}

// console.log(counter)

// Functions
// helloWorld('Berci')

function helloWorld(name) {
  console.log(`Hello world from ${name}!`)
}

// const expressedFunction = function() {
//   console.log('I am not accessible!')
// }

// const arrowFunction = (param) => {
//   console.log(param)
// };

// arrowFunction('hey!')

function addTwo(num1, num2) {
  return num1 + num2
}

const sumOf2and7 = addTwo(2, 7) // 9
// console.log(sumOf2and7)

// Scope

// let one = 'A'
// let two = 'B'

// function change1() {
//   let one = 'C'
//   console.log(one)

//   function test() {
//     two = 'D'
//     const one = 'F'
//     console.log(one)
//   }

//   console.log(two)
//   test()
//   two = 'E'
//   console.log(two)
// }

// console.log(one, two)

// change1()

// test()


// Objects
const myObj = {
  name: 'Berci',
  age: 24,
  isCool: true,
  greet: function(someVal) {
    if (someVal > 5) {
      this.name = 'Jerome';
    }
    this.name = 'Jesse';
    console.log(`Hey guys from ${this.name}`);
    return 1;
  }
}

// myObj.greet(10)
// const adfgsadfgsioadsfadfsadfjskl = myObj.greet(2)
// console.log(adfgsadfgsioadsfadfsadfjskl);
// console.log(myObj)

// Arrays
const myArray = [
  [
    2,
    3
  ],
  2,
  true,
  {
    name: 'berci',
    arr: [1, 2, 3]
  }
]

// console.log(myArray[0][1]);

// Builtins
const numArr = [1, 2, 3, 4, 5];

// console.log(numArr.join(''))
// numArr.pop();
// numArr.push(12);
// console.log(numArr);

for (let i = 0; i < numArr.length; i++) {
  // console.log(numArr[i])
}

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log('Hello!')
//   }
// }

// const jerome = new Person('Jerome', 26)
// const jesse = new Person('Jesse', 22)
// console.log(jerome)
// console.log(jesse)

// jerome.greet()

// Context & this
// console.log(this)

// DOM


// Event listeners


// Event delegation