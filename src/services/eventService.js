function processEvent(accounts, eventData) {
    const { type, amount, origin, destination } = eventData;

    switch (type) {
        case 'deposit':
            return deposit(accounts, destination, amount);
        case 'withdraw':
            return withdraw(accounts, origin, amount);
        case 'transfer':
            return transfer(accounts, origin, destination, amount);
        default:
            throw new Error('Tipo de evento inválido');
    }
}

function deposit(accounts, destination, amount) {
    if (!accounts[destination]) {
        accounts[destination] = { balance: 0 };
    }
    accounts[destination].balance += amount;
    return { destination: { id: destination, balance: accounts[destination].balance } };
}

function withdraw(accounts, origin, amount) {
    if (!accounts[origin]) {
        throw new Error('Conta não encontrada');
    }
    if (accounts[origin].balance < amount) {
        throw new Error('Saldo insuficiente');
    }
    accounts[origin].balance -= amount;
    return { origin: { id: origin, balance: accounts[origin].balance } };
}

function transfer(accounts, origin, destination, amount) {
    if (!accounts[origin]) {
        throw new Error('Conta não encontrada');
    }
    withdraw(accounts, origin, amount); // Retira o valor da conta de origem
    deposit(accounts, destination, amount); // Deposita na conta de destino
    return {
        origin: { id: origin, balance: accounts[origin].balance },
        destination: { id: destination, balance: accounts[destination].balance }
    };
}

module.exports = { processEvent };