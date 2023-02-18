export class Payment {
    constructor(recipient, detail, amount) {
        this.recipient = recipient;
        this.detail = detail;
        this.amount = amount;
    }
    format() {
        // return `${this.recipient} pays ${this.amount} for ${this.detail}`
        // return `مبلغ ${this.amount} به ${this.recipient} برای ${this.detail} پرداخت کرد`
        return ` ${this.recipient} عزیز درود! شما مبلغ ${this.amount} تومان برای استفاده از خدمات ${this.detail} پرداخت کردید. از اینکه آموزشگاه فردا را انتخاب کردید سپاس گذاریم `;
    }
}
