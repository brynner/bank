# Simple Bank API

A simple bank API built with Node.js to handle basic account operations such as checking balance, depositing, withdrawing and transferring funds. This API is designed to be stateless, without using a database for persistence, storing data in memory instead. 

## Table of Contents
- [Endpoints](#endpoints)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Project Structure](#project-structure)

## Endpoints

### 1. POST `/reset`
Resets the state of all accounts, clearing all data in memory.

**Response:**
- `200 OK` - Reset successful

---

### 2. GET `/balance`
Fetches the balance of a specified account.

**Parameters:**
- `account_id` - ID of the account to check balance for (query parameter).

**Responses:**
- `200 OK` - Returns the balance if the account exists.
- `404` - Account does not exist.

Example:
```json
// GET /balance?account_id=100
200 OK
20
```

---

### 3. POST `/event`
Registers a financial event for deposit, withdrawal, or transfer.

**Request Body:**
- type - Type of event (deposit, withdraw, transfer).
- destination - Destination account ID (for deposit and transfer).
- origin - Origin account ID (for withdraw and transfer).
- amount - Amount of the transaction.

**Responses:**
- 201 Created - Event processed successfully.
- 404 - Account does not exist (for withdraw and transfer from a non-existent origin).

```json
// POST /event
{
  "type": "deposit",
  "destination": "100",
  "amount": 10
}
Response:
201 Created
{
  "destination": {
    "id": "100",
    "balance": 10
  }
}
```

---

## Installation

**1. Clone the repository**

```bash
git clone https://github.com/brynner/bank.git
cd simple-bank-api
```

**2. Install dependencies**

```bash
npm install
```

**2. Start the server**

```bash
npm start
```

The API will be running on http://localhost:3000.

---

## Usage

You can use tools like Postman or curl to interact with the API. Below are some example requests:

### Reset API State

```bash
curl -X POST http://localhost:3000/reset
```

### Get Balance

```bash
curl http://localhost:3000/balance?account_id=100
```

### Create a Deposit Event

```bash
curl -X POST http://localhost:3000/event -H "Content-Type: application/json" -d '{
  "type": "deposit",
  "destination": "100",
  "amount": 10
}'
```

---

## Testing

To run tests, use the testing suite provided by the interviewer. Make sure your server is running before executing the tests.

---

## Project Structure

```bash
simple-bank-api/
├── src/
│   ├── api/
│   │   ├── balance.js         # Handles GET /balance
│   │   ├── event.js           # Handles POST /event
│   │   └── reset.js           # Handles POST /reset
│   ├── services/
│   │   └── accountService.js  # Business logic for handling account operations
│   └── index.js               # Entry point for the server
└── package.json
```