const express = require('express');
const app = express();

app.use(express.json());

let users = [
  { id: 1, name: "Nandan" },
  { id: 2, name: "DevOps Master" }
];

// GET all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// POST new user
app.post('/api/users', (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  const newUser = {
    id: users.length + 1,
    name
  };

  users.push(newUser);

  res.status(201).json(newUser);
});

// Health check
app.get('/health', (req, res) => {
  res.status(200).send("OK");
});

const PORT = 80;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
