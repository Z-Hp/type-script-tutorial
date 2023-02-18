const form = document.querySelector("form")!;

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (event: Event) => {
    event.preventDefault();
    console.log(`${type.value}: مبلغ ${amount.value} به ${tofrom.value} برای ${details.value} پرداخت شد`)

})