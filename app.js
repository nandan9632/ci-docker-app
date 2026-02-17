const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Backend 🚀");
});

app.get("/api", (req, res) => {
  res.json({
    message: "API is working 🚀",
    status: "success"
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
