const express = require('express');
const path = require("path");
//const logger = require("morgan");
const app = express();
const cors = require('cors');

const players = require('./routes/players.js')

app.use(cors());

// setup for receiving JSON

//app.use(logger("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use('/', players);

app.listen(8080, function() {
    console.log('Server listening on port 8080');
});

module.exports = app;