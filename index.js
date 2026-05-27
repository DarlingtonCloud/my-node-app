const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello from Azure!</h1>
    <p>My first Node.js app deployed on Azure by Nebo Darlington</p>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});