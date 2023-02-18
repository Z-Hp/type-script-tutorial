"use strict";
var form = document.querySelector("form");
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("".concat(type.value, ": \u0645\u0628\u0644\u063A ").concat(amount.value, " \u0628\u0647 ").concat(tofrom.value, " \u0628\u0631\u0627\u06CC ").concat(details.value, " \u067E\u0631\u062F\u0627\u062E\u062A \u0634\u062F"));
});
