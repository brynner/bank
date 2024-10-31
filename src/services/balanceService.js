function getBalance(events) {
    return events.reduce((balance, event) => {
        return event.type === 'credit'
            ? balance + event.amount
            : balance - event.amount;
    }, 0);
}

module.exports = { getBalance };