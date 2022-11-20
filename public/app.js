// interfaces
import { ListTemplate } from "./classes/ListTemplate.js";
import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
const form = document.querySelector('form.new-item-form');
console.log(form, form.children);
// inputs
const fType = document.querySelector('#type');
const fToFrom = document.querySelector('#tofrom');
const fDetails = document.querySelector('#details');
const fAmount = document.querySelector('#amount');
const list = new ListTemplate(document.querySelector('ul'));
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // now using tuples to init objects
    let values = [
        fToFrom.value, fDetails.value, fAmount.valueAsNumber,
    ];
    let doc;
    switch (fType.value) {
        case 'invoice':
            doc = new Invoice(...values);
            break;
        case 'payment':
            doc = new Payment(...values);
            break;
        default:
            throw new Error('Type not implemented');
    }
    list.render(doc, fType.value, 'end');
});
// Generics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'yoshi', age: 40 });
console.log(docOne, docOne.name);
// ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
    ResourceType[ResourceType["THINGS"] = 5] = "THINGS";
})(ResourceType || (ResourceType = {}));
const docThree = {
    type: ResourceType.PERSON,
    uid: 1,
    name: 'person',
    data: 'shaun'
};
const docFour = {
    type: ResourceType.THINGS,
    uid: 2,
    name: 'shopping list',
    data: ['bread', 'wine', 'milk']
};
console.log(docThree, docFour);
// TUPLES
// regular array
let arr = ['ryu', 25, true];
arr[0] = false; // legal created as mixed array
// now with tuples, positions in array have a fixed type now
let tup = ['ryu', 30, false];
// tup[0] = 123; // illegal, tup[0] have to be a string
console.log(tup);
