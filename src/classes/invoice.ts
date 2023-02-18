export class Invoice {
    

    constructor(
        public client: string,
        private detail: string,
        readonly amount: number
    ) {}

    format() {
        return `${this.client} recieve ${this.amount} for ${this.detail}`
    }
}