'use strict';

const express = require( 'express' ),
      router = express.Router(),
      mongoose = require( 'mongoose' ),
      Trips = require( '../models/Trips.js' );

router.get( '/api/trips', function( req, res ) {
  Trips.find( function( err, trips ) {
    if ( err ) return next( err );
    res.json( trips );
  });
});

module.exports = router;
