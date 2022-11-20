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
    let doc;
    if (fType.value === 'invoice') {
        doc = new Invoice(fToFrom.value, fDetails.value, fAmount.valueAsNumber);
    }
    else if (fType.value === 'payment') {
        doc = new Payment(fToFrom.value, fDetails.value, fAmount.valueAsNumber);
    }
    else {
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
const docThree = {
    uid: 1,
    name: 'person',
    data: 'shaun',
};
const docFour = {
    uid: 2,
    name: 'shopping list',
    data: ['bread', 'wine', 'milk'],
};
console.log(docThree, docFour);
