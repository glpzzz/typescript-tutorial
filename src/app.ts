// interfaces
interface IsPerson {
    name: string;
    age: number;

    speak(a: string): void;

    spend(n: number): number;
}

const me: IsPerson = {
    age: 30,
    name: "Shaun",
    speak(a: string): void {
        console.log(a);
    },
    spend(n: number): number {
        return n;
    },
};

const greetPerson = (person: IsPerson) => {
    console.log('hello ', person.name);
}

console.log(me);
greetPerson(me);

let someone: IsPerson;

import {Invoice} from "./classes/Invoice.js";
import {Payment} from "./classes/Payment.js";
import {HasFormatter} from "./interfaces/HasFormatter";

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('yoshi', 'web work', 250);
docTwo = new Payment('mario', 'plumbing work', 200);

const inv1 = new Invoice('Mario', 'Mushroom', 2000);
const inv2 = new Invoice('Luigi', 'Work on Luigi website', 3000);

const pay1 = new Payment('Toad', 'Mushroom', 2000);
const pay2 = new Payment('Yoshi', 'Work on Luigi website', 3000);

let docs: HasFormatter[] = [];
docs.push(inv1);
docs.push(inv2);
docs.push(pay1);
docs.push(pay2);
docs.push(docOne);
docs.push(docTwo);

console.log(docs);

docs.forEach(item => console.log(
    item.format(),
));

const anchor = document.querySelector('a')!;
console.log(anchor.href);

// we can check with the if or use the ! after the selector
// if (anchor) {
//     console.log(anchor.href);
// }

const form = document.querySelector('form.new-item-form') as HTMLFormElement;
console.log(form, form.children);

// inputs

const fType = document.querySelector('#type') as HTMLSelectElement;
const fToFrom = document.querySelector('#tofrom') as HTMLInputElement;
const fDetails = document.querySelector('#details') as HTMLInputElement;
const fAmount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;
    if (fType.value === 'invoice') {
        doc = new Invoice(fToFrom.value, fDetails.value, fAmount.valueAsNumber);
    } else if (fType.value === 'payment') {
        doc = new Payment(fToFrom.value, fDetails.value, fAmount.valueAsNumber);
    } else {
        throw new Error('Type not implemented');
    }

    docs.push(doc);
    console.log(docs);
})