function getBalance(accounts, accountId) {
    return accounts[accountId] ? accounts[accountId].balance : undefined;
}

module.exports = { getBalance };