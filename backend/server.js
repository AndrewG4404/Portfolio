const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const contactRoute = require('./routes/contact');
app.use('/api/contact', contactRoute);

const contactRoute = require('./routes/contact');
app.use('/api/contact', contactRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});