let greet: Function;

// function signature example 1
let greet1: () => void;

// function signature example 2
let greet2: (a: string, b: string) => void;

// function signature example 3
let greet3: (a: string, b: string) => string;

// invalid
// greet3 = (m: number, n: number) => m + n;
// console.log(greet3(1,2));
