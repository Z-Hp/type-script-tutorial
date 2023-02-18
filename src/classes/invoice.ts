import { HasFormatter } from "../interfaces/HasFormatter.js"

export class Invoice implements HasFormatter {
    constructor(
        public client: string,
        private detail: string,
        readonly amount: number
    ) {}

    format() {
        // return `${this.client} recieve ${this.amount} for ${this.detail}`
        // return `مبلغ ${this.amount} به ${this.client} برای ${this.detail} دربافت کرد`
        return ` ${this.client} عزیز درود! خدمات دریافتی شما : ${this.detail} و مبلغ قابل پرداخت ${this.amount} تومان است`
    }
}