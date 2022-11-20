// interfaces
import {ListTemplate} from "./classes/ListTemplate.js";
import {Invoice} from "./classes/Invoice.js";
import {Payment} from "./classes/Payment.js";
import {HasFormatter} from "./interfaces/HasFormatter";

const form = document.querySelector('form.new-item-form') as HTMLFormElement;
console.log(form, form.children);

// inputs
const fType = document.querySelector('#type') as HTMLSelectElement;
const fToFrom = document.querySelector('#tofrom') as HTMLInputElement;
const fDetails = document.querySelector('#details') as HTMLInputElement;
const fAmount = document.querySelector('#amount') as HTMLInputElement;

const list = new ListTemplate(document.querySelector('ul')!);

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

    list.render(doc, fType.value, 'end');
})

// Generics

const addUID = <T extends { name: string }>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

let docOne = addUID({name: 'yoshi', age: 40});
console.log(docOne, docOne.name);

// ENUMS
enum ResourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON, THINGS}

// generics with interfaces
interface Resource<T> {
    uid: number;
    name: string;
    type: ResourceType,
    data: T;
}

const docThree: Resource<string> = {
    type: ResourceType.PERSON,
    uid: 1,
    name: 'person',
    data: 'shaun'
}

const docFour: Resource<string[]> = {
    type: ResourceType.THINGS,
    uid: 2,
    name: 'shopping list',
    data: ['bread', 'wine', 'milk']
}

console.log(docThree, docFour);
