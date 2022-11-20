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