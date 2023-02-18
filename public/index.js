"use strict";
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.detail = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.client, " recieve ").concat(this.amount, " for ").concat(this.detail);
    };
    return Invoice;
}());
var invoices = [];
var form = document.querySelector("form");
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // console.log(`${type.value}: مبلغ ${amount.value} به ${tofrom.value} برای ${details.value} پرداخت شد`)
    var invTwo = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    invoices.push(invTwo);
    console.log(invoices);
});
// const invOne = new Invoice("roya", "teaching", 800);
// console.log(invOne.format());
// invoices.push(invOne);
