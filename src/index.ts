import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";



let docs : HasFormatter[] = [];

var form = document.querySelector("form")!;
var type = document.querySelector("#type") as HTMLSelectElement;
var tofrom = document.querySelector("#tofrom") as HTMLInputElement;
var details = document.querySelector("#details") as HTMLInputElement;
var amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (event: Event) => {
    event.preventDefault();
    let doc: HasFormatter;
    // console.log(`${type.value}: مبلغ ${amount.value} به ${tofrom.value} برای ${details.value} پرداخت شد`)
    if (type.value === "صورتحساب") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    
    docs.push(doc);
    console.log(doc.format());
    
});


