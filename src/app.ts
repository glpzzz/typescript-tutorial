console.log('Hello, Typescript!')

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
    console.log(fType.value, fToFrom.value, fDetails.value, fAmount.valueAsNumber);
})