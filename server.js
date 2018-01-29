'use strict';

const express = require( 'express' ),
  app = express(),
  server = require('http').Server(app),
  bodyParser = require( 'body-parser' );

let PORT = process.env.PORT || 5000;

app.use( bodyParser.json() );

// API Routes
app.use( require('./_server/routes/history') );

// Serve Content from docs
app.use( express.static(__dirname + '/docs') );

// Start
console.log('Express listening on port:', PORT);
server.listen(PORT);

exports = module.exports = app;