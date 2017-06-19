'use strict';

const express = require( 'express' ),
  app = express(),
  server = require('http').Server(app),
  bodyParser = require( 'body-parser' ),
  io = require('socket.io')(server);

let PORT = process.env.PORT || 5000;

app.use( bodyParser.json() );

// API Routes
app.use( require('./_server/routes/weather') );

// Serve Content from docs
app.use( express.static(__dirname + '/docs') );

// Start
// app.listen(PORT);
server.listen(PORT);

// Bitcoin Pricing
const ba = require('bitcoinaverage')
const publicKey = 'MjEzYzIyMWQ3MDc2NDdiZjhhMjgyNmRjNzdmYTUyMjc'
const secretKey = 'YjY0YTQ3MjM2NDNmNDM4NWFhNmE0NTgxYzJkNzE5MjRlZGIxOGU0NmVlZGI0YTg5YTk2NmFhNTQ0NTE3NjI1Mg'
const ws = ba.websocketClient(publicKey, secretKey);

io
  .of('/api/bitcoin')
  .on('connection', function (socket) {
    // Connecting to the local ticker and printing BTCEUR price data; you can try it with 'global'
    ws.connectToTickerWebsocket('local', 'BTCUSD', function (response) {
      console.log(JSON.stringify(response, null, 4));
      socket.emit('priceUpdate', { response });
    });

    // socket.emit('news', { hello: 'world' });
    /* socket.on('my other event', function (data) {
      console.log(data);
    }); */
  });

exports = module.exports = app;
