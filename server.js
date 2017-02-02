'use strict';

const express = require( 'express' ),
      mongoose = require( 'mongoose' ),
      dbConfig = require( './db' ),
      app = express(),
      bodyParser = require( 'body-parser' );
      // path = require( 'path' );

let PORT = process.env.PORT || 5000;

// Database
mongoose.connect( dbConfig.url, function( err ) {
  if(err) {
    console.log( 'Error connecting to Database:', err );
  } else {
    console.log( 'Connected to Database' );
  }
});

app.use( bodyParser.json() );

// API Routes
app.use( require('./_server/routes/users') );
app.use( require('./_server/routes/trips') );

// Serve Content from public/app
app.use( express.static(__dirname + '/public/app') );
/* app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/app' + '/index.html'));
  res.sendFile(path.join(__dirname + '/public/app' + '/bundle.js'));
}); */

// Start
app.listen(PORT);

exports = module.exports = app;
