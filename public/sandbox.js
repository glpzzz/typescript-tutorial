"use strict";
//typing for Functions
let greet;
greet = () => console.log('Hello, World!');
// typing function parameters
const add = (a, b) => console.log(a + b);
add(5, 6);
// optional parameter
const func_with_optional = (p) => console.log(p);
func_with_optional(); // p is undefined
func_with_optional(10); // p is 10
// parameter with default value
const func_with_default_value = (p = 10) => console.log(p);
func_with_default_value(); // p = 10 (default)
func_with_default_value(20); // p = 20 (passed)
// returning values typing (explicit)
const minus = (a, b) => {
    return a - b;
};
console.log(minus(10, 7));
