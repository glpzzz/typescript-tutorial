// ARRAYS
var names = ['luigi', 'mario', 'yoshi'];
console.log(names);
// valid to add a new item of same value
names.push('toad');
// illegal to add a new item of different item
// names.push(3);
// also illegal if trying to assign directly on position
// names[0] = 2345;
console.log(names);
// we can have mixed types if declared like that
var mixed = ['ken', 4, true, { key: 'value' }];
console.log(mixed);
// OBJECTS
var ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
console.log(ninja);
// invalid. type of properties can't change
// ninja.age = '35';
// invalid. can't add a new propery
// ninja.properties = ['fighting', 'sneaking'];
// invalid. can't remove/add new properties because it
// doesn't match the first defined structure
ninja = {
    name: 'yoshi',
    belt: 'orange',
    age: 40
};
