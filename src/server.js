// backend/server.js

const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// Load the data from the JSON file
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

// Search endpoint
app.get('/search', (req, res) => {
  const query = req.query.q.toLowerCase();
  const results = data.filter(item => item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query));
  res.json(results);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
