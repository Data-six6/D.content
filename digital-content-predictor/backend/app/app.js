require('dotenv').config();
require('./config/db');

const express = require('express');
const app = express();

const planRoutes = require('./routes/planRoutes')

app.use(express.json());


app.use('/api/plan', planRoutes);



app.use((req, res) => res.status(404).json({ error: 'Route not found' }));

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

module.exports = app;