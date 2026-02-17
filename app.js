const express = require("express");
const app = express();

app.use(express.json());

let users = [
  { id: 1, name: "Nandan" },
  { id: 2, name: "DevOps Master" }
];

// GET all users
app.get("/api/users", (req, res) => {
  res.json(users);
});

// POST new user
app.post("/api/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.listen(80, () => {
  console.log("Server running on port 80");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
