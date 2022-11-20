import {Invoice} from "./classes/Invoice.js";

const inv1 = new Invoice('Mario', 'Mushroom', 2000);
const inv2 = new Invoice('Luigi', 'Work on Luigi website', 3000);

let invoices: Invoice[] = [];
invoices.push(inv1);
invoices.push(inv2);

invoices.forEach(inv => console.log(
    inv.client,
    inv.amount,
    inv.format(),
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
    console.log(
        fType.value,
        fToFrom.value,
        fDetails.value,
        fAmount.valueAsNumber
    );
})