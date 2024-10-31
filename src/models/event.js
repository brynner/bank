class Event {
    constructor(type, amount) {
        this.type = type; // 'credit' ou 'debit'
        this.amount = amount;
    }
}

module.exports = Event;