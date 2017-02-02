'use strict';

const express = require( 'express' ),
      mongoose = require( 'mongoose' ),
      dbConfig = require( './db' ),
      app = express(),
      bodyParser = require( 'body-parser' );

let PORT = process.env.PORT || 5000;

// Database
mongoose.connect( dbConfig.url, function( err ) {
  if(err) {
    console.log( 'connection error', err );
  } else {
    console.log( 'Connected to Database' );
  }
});

app.use( bodyParser.json() );

// Routes
app.use( require('./_server/routes/app') );
app.use( require('./_server/routes/users') );
app.use( require('./_server/routes/trips') );

// Start
app.listen(PORT);

exports = module.exports = app;
