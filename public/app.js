import { Invoice } from "./classes/Invoice.js";
const inv1 = new Invoice('Mario', 'Mushroom', 2000);
const inv2 = new Invoice('Luigi', 'Work on Luigi website', 3000);
let invoices = [];
invoices.push(inv1);
invoices.push(inv2);
invoices.forEach(inv => console.log(inv.client, inv.amount, inv.format()));
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
    console.log(fType.value, fToFrom.value, fDetails.value, fAmount.valueAsNumber);
});
