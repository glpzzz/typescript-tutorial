"use strict";
// classes
class Invoice {
    constructor(pClient, pDetails, pAmount) {
        this.client = pClient;
        this.details = pDetails;
        this.amount = pAmount;
    }
    format() {
        return `${this.client} ows £${this.amount} for ${this.details}.`;
    }
}
const inv1 = new Invoice('Mario', 'Mushroom', 2000);
const inv2 = new Invoice('Luigi', 'Work on Luigi website', 3000);
console.log(inv1.format(), inv2.format());
let invoices = [];
invoices.push(inv1);
invoices.push(inv2);
console.log(invoices);
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
