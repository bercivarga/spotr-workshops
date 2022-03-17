//////////////////////////////////////////////////////////////////////////////////////////////////////
// Week 8 ////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////


// Function declarations vs function expressions

function myAwesomeFn() {
  // some code
}

const anotherAwesomeFn = function() {
  // some code
}

const anArrowFn = () => {
  // some code
}

// Where are arrow methods useful?

// Window is the upmost scope
window.name = 'David'

const myObj = {
  name: 'Berci',
  myMethod() {
    console.log(this.name)
  },
  myOtherMethod: () => {
    console.log(this.name)
  },
  myOtherOtherMethod() {
    const log = () => {
      console.log(this.name)
    }
    log();
  }
}

myObj.myMethod();
myObj.myOtherMethod();
myObj.myOtherOtherMethod();

// ATTENTION! Only use arrow function expressions sparingly!
// They might save you some characters, but they are not as readable as the function keyword.
// Use it when it actually helps with a specific use case or when it doesn't harm readability.

//////////////////////////////////////////////////////////////////////////////////////////////////////

// Var, let, const
function some() {
  console.log(rebel);
  console.log(batman);

  {
    var rebel = 'I\'m a rebel';
    const goodInmate = 'I\'m a good guy!';
  }

  const rebel = 'Now what?';

  console.log(rebel);
  console.log(goodInmate);

  const batman = 'dadadada dadadada BATMAAAAAN!'
}

// Scope
{
  const pizza = 'margarita'
  {
    const pizza = 'pepperoni'
    var pizza = 'cheese'
  }
  console.log(pizza)
}  // What kind of pizza are we eating?

// Hoisting

{
  myFn('teapot');
  function myFn(word) {
    console.log(`I am a little ${word}.`);
  }

  sayHi();
  const sayHi = () => {
    console.log('Hi!')
  }

  console.log(myVar);
  var myVar = 'I\'m a var! Yay!';

  console.log(myConst);
  const myConst = 'I\'m a const! Woop woop!';
}

//////////////////////////////////////////////////////////////////////////////////////////////////////

// Types and coercion

// Someone list all the data types in JS!

{
  const value1 = '5';
  const value2 = 9;
  const sum = value1 + value2;
  console.log(sum);
}

{
  const value1 = true;
  const value2 = false;
  const sum = value1 + value2;
  console.log(sum);
} // Why is this important?

{
  const value1 = {};
  const value2 = 1;
  const sum = value1 + value2;
  console.log(sum);
} // Why is this important?

{
  const value1 = [];
  const value2 = [];
  const sum = value1 + value2;
  console.log(sum);
} // Why is this important?

{
  const value1 = "" == [];
  const value2 = "" == false;
  const value3 = "" === [];
  const value4 = [] == NaN;
  const value5 = false === 0;

  console.log(value1, value2, value3, value4, value5);
}

// How to avoid bugs? -> String(val), Number(val), Array.isArray(val), val.length, etc...

// Hint: falsy values are: false, 0, -0, 0n, "", '', ``, null, undefined, NaN.

//////////////////////////////////////////////////////////////////////////////////////////////////////

// Array methods

// Some we already know: push, pop, shift, unshift

// Functional methods: map, filter, reduce

// find, some, etc...

//////////////////////////////////////////////////////////////////////////////////////////////////////

// Inheritance
// Someone quickly recap what inheritance and the prototype chain mean.

// Build tools and what they do?

//////////////////////////////////////////////////////////////////////////////////////////////////////

// Linters and formatters
// ESLint
// Prettier

//////////////////////////////////////////////////////////////////////////////////////////////////////

// Frameworks
// React vs Vue vs Angular vs Svelte vs Solid vs a new one every day

//////////////////////////////////////////////////////////////////////////////////////////////////////

// What's to come? -- React, TypeScript, Modern CSS and frameworks, and lots of fun!!