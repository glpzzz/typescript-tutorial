// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

// illegal. 5 is not string
// character = 5;

// legal. 'Mario' is a string
character = 'Mario';

// arrays. need to initialize empty to be able to use
// push later
let ninjas: string[] = [];
console.log(ninjas);

// illegal. 5 is not string
// ninjas.push(5);

// legal
ninjas.push('Mario');
console.log(ninjas);

// union types. to instruct that a variable can be assigned values
// several types.
let mixed: (string | number | boolean)[] = [];
mixed.push('Luigi');
mixed.push(30);
mixed.push(false);
console.log(mixed);

// in variables, () is not required
let uid: string | number;

// objects
let ninjaOne: object;
ninjaOne = {name: 'yoshi', age: 30};

// object with defined properties
let ninjaTwo: { name: string, age: number, belt: string };
// illegal, skills wasn't defined as a property
// ninjaTwo.skills = ['asdf'];