import { Invoice } from "./classes/invoice.js";
let invoices = [];
var form = document.querySelector("form");
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    // console.log(`${type.value}: مبلغ ${amount.value} به ${tofrom.value} برای ${details.value} پرداخت شد`)
    const inv = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    invoices.push(inv);
    console.log(invoices);
});
