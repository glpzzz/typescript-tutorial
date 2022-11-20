// removing the types restriction with any
let age: any = 25;
console.log(age);
age = '1234';
console.log(age);
age = true;
console.log(age);

// just to use in rare cases.

// using in arrays
let mixed: any[] = [];
mixed.push(1);
mixed.push('1');
mixed.push(true);

// using in objects
let ninja: { name: any, age: any, belt: any };