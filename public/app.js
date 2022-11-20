const me = {
    age: 30,
    name: "Shaun",
    speak(a) {
        console.log(a);
    },
    spend(n) {
        return n;
    },
};
const greetPerson = (person) => {
    console.log('hello ', person.name);
};
console.log(me);
greetPerson(me);
let someone;
import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
let docOne;
let docTwo;
docOne = new Invoice('yoshi', 'web work', 250);
docTwo = new Payment('mario', 'plumbing work', 200);
const inv1 = new Invoice('Mario', 'Mushroom', 2000);
const inv2 = new Invoice('Luigi', 'Work on Luigi website', 3000);
const pay1 = new Payment('Toad', 'Mushroom', 2000);
const pay2 = new Payment('Yoshi', 'Work on Luigi website', 3000);
let docs = [];
docs.push(inv1);
docs.push(inv2);
docs.push(pay1);
docs.push(pay2);
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
docs.forEach(item => console.log(item.format()));
const anchor = document.querySelector('a');
console.log(anchor.href);
// we can check with the if or use the ! after the selector
// if (anchor) {
//     console.log(anchor.href);
// }
const form = document.querySelector('form.new-item-form');
console.log(form, form.children);
// inputs
const fType = document.querySelector('#type');
const fToFrom = document.querySelector('#tofrom');
const fDetails = document.querySelector('#details');
const fAmount = document.querySelector('#amount');
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
    docs.push(doc);
    console.log(docs);
});
