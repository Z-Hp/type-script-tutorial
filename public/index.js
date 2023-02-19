import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
let docs = [];
var form = document.querySelector("form");
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
var ul = document.querySelector("ul");
var list = new ListTemplate(ul);
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let doc;
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    if (type.value === "صورتحساب") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    docs.push(doc);
    // console.log(doc.format());
    list.render(doc, type.value, "end");
});
