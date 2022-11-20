// explicit types
var character;
var age;
var isLoggedIn;
// illegal. 5 is not string
// character = 5;
// legal. 'Mario' is a string
character = 'Mario';
// arrays. need to initialize empty to be able to use
// push later
var ninjas = [];
console.log(ninjas);
// illegal. 5 is not string
// ninjas.push(5);
// legal
ninjas.push('Mario');
console.log(ninjas);
// union types. to instruct that a variable can be assigned values
// several types.
var mixed = [];
mixed.push('Luigi');
mixed.push(30);
mixed.push(false);
console.log(mixed);
// in variables, () is not required
var uid;
// objects
var ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
// object with defined properties
var ninjaTwo;
// ilegal, skills wasn't defined as a property
// ninjaTwo.skills = ['asdf'];
