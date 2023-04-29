const express = require('express');
const path = require("path");
const app = express();
const cors = require('cors');

//multiplayer
const server = require('http').createServer(app);




const players = require('./routes/players.js')

app.use(cors());

// setup for receiving JSON
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use('/', players);

module.exports = app;