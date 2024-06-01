const express = require("express");
const app = express();
app.use(express.json());
const path = require('path');
const fs = require('fs');

app.use(express.json());

const usersFilePath = path.join(__dirname, 'accounts.json');
let accounts = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));

app.post('/accounts', (req, res) => {
  const newAccount = { ...req.body, id: accounts.length + 1 };
  accounts.push(newAccount);
  saveAccountsToFile();
  res.status(201).json(newAccount);
});

app.get('/accounts', (_req, res) => {
  res.json(accounts);
});

app.get('/accounts/:id', (req, res) => {
  const account = accounts.find(a => a.id === parseInt(req.params.id));
  if (account) {
    res.json(account);
  } else {
    res.status(404).json({ error: 'Cannot find the account' });
  }
});

app.put('/accounts/:id', (req, res) => {
  const accountIndex = accounts.findIndex(a => a.id === parseInt(req.params.id));
  if (accountIndex !== -1) {
    const updatedAccount = { ...accounts[accountIndex], ...req.body };
    accounts[accountIndex] = updatedAccount;
    saveAccountsToFile();
    res.json(updatedAccount);
  } else {
    res.status(404).json({ error: 'Cannot find account' });
  }
});

app.delete('/accounts/:id', (req, res) => {
  const accountIndex = accounts.findIndex(a => a.id === parseInt(req.params.id));
  if (accountIndex !== -1) {
    const deletedAccount = accounts.splice(accountIndex, 1)[0];
    deletedAccount.deletedAt = new Date();
    saveAccountsToFile();
    res.json(deletedAccount);
  } else {
    res.status(404).json({ error: 'Cannot find account' });
  }
});

function saveAccountsToFile() {
  fs.writeFileSync(usersFilePath, JSON.stringify(accounts, null, 2));
}

app.listen(8081, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is running on port 8081");
  }
});

