'use strict';

const express = require( 'express' ),
  app = express(),
  bodyParser = require( 'body-parser' );

let PORT = process.env.PORT || 5000;

app.use( bodyParser.json() );

// API Routes
app.use( require('./_server/routes/weather') );

// Serve Content from docs
app.use( express.static(__dirname + '/docs') );

// Start
app.listen(PORT);

exports = module.exports = app;
