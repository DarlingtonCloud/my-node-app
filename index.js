const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Home route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Nebo Darlington API',
    status: 'running',
    version: '1.0.0'
  });
});

// Students route
app.get('/api/students', (req, res) => {
  res.json([
    { id: 1, name: 'Chukwudi Obi', class: 'SS3', grade: 'A' },
    { id: 2, name: 'Adaeze Nwosu', class: 'SS2', grade: 'B' },
    { id: 3, name: 'Emeka Eze', class: 'SS1', grade: 'A' }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});