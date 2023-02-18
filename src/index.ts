import { Invoice } from "./classes/invoice.js";



let invoices : Invoice[] = [];

var form = document.querySelector("form")!;
var type = document.querySelector("#type") as HTMLSelectElement;
var tofrom = document.querySelector("#tofrom") as HTMLInputElement;
var details = document.querySelector("#details") as HTMLInputElement;
var amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (event: Event) => {
    event.preventDefault();
    // console.log(`${type.value}: مبلغ ${amount.value} به ${tofrom.value} برای ${details.value} پرداخت شد`)
    const inv = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    invoices.push(inv);
    console.log(invoices);
    
});


