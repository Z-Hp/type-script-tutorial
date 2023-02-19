import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";



let docs : HasFormatter[] = [];

var form = document.querySelector("form")!;
var type = document.querySelector("#type") as HTMLSelectElement;
var tofrom = document.querySelector("#tofrom") as HTMLInputElement;
var details = document.querySelector("#details") as HTMLInputElement;
var amount = document.querySelector("#amount") as HTMLInputElement;

var ul = document.querySelector("ul")!;
var list = new ListTemplate(ul);


form.addEventListener("submit", (event: Event) => {
    event.preventDefault();

    let doc: HasFormatter;

    let values : [string, string, number];
    values = [tofrom.value, details.value, amount.valueAsNumber]


    if (type.value === "صورتحساب") {
        doc = new Invoice(...values);
    } else {
        doc = new Payment(...values);
    }
    
    docs.push(doc);
    // console.log(doc.format());
    list.render(doc, type.value, "end")
});


