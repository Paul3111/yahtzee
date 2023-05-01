const express = require('express');
const path = require("path");
const app = express();
const cors = require('cors');
const players = require('./routes/players.js')
const http = require('http').createServer(app);

app.use(cors());

//multiplayer


const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:8080',
    methods: ['GET', 'POST']
  }
});

io.on('connection', socket => {
  console.log('A user connected: ' + socket.id);

  socket.on('disconnect', function () {
      console.log('A user disconnected: ' + socket.id);
  });
});

// setup for receiving JSON
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use('/', players);

//listen for incoming requests
http.listen(3000, () => {
  console.log('Server is running on port 3000');
});


module.exports = app;


// FE 3000
// BE 8080
