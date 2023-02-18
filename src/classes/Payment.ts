import { HasFormatter } from "../interfaces/HasFormatter.js"

export class Payment implements HasFormatter {
    constructor(
        public recipient: string,
        private detail: string,
        readonly amount: number
    ) {}

    format() {
        return `${this.recipient} pays ${this.amount} for ${this.detail}`
    }
}