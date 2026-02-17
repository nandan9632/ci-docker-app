const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send("Frontend route working ");
});

app.get('/api', (req, res) => {
  res.json({
    status: "success",
    message: "Backend API working bro "
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
