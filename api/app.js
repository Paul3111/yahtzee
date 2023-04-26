const express = require('express');
const path = require("path");
//const logger = require("morgan");
const app = express();

const players = require('./routes/players.js')

// setup for receiving JSON
app.use(express.json())

//app.use(logger("dev"));
//app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    console.log('HIIIIIIIIIII')
    res.send('HELLO')
})

app.use('/api', players);
