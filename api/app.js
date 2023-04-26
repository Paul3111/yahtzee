const express = require('express');
const app = express();

const players = require('./routes/players.js')

app.use('/api', players);
