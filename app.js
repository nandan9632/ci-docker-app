const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Backend is running " });
});

app.get("/api/users", (req, res) => {
    res.json([
        { id: 1, name: "Nandan" },
        { id: 2, name: "DevOps Master" }
    ]);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
