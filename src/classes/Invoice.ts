import {HasFormatter} from "../interfaces/HasFormatter";

// classes
export class Invoice implements HasFormatter {
    constructor(
        readonly client: string,
        private details: string,
        public amount: number,
    ) {
    }

    format(): string {
        return `${this.client} ows £${this.amount} for ${this.details}.`;
    }
}