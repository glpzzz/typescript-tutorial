// creating variables
let character = 'Mario';
let age = 30;
let isBlackBelt = false;

// variables types get defined by the type of the value first assigned
// type can't be changed after that
// new value can be assigned if not const

console.log(character, age, isBlackBelt);

character = 'Luigi';
age = 40;
isBlackBelt = true;

console.log(character, age, isBlackBelt);

// typing parameters of functions
const circ = (diameter: number) => diameter * Math.PI

console.log(circ(100));