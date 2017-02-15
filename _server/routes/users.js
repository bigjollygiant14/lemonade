'use strict';

const express = require( 'express' ),
      router = express.Router(),
      mongoose = require( 'mongoose'),
      Users = require( '../models/Users.js' );

/* /api/users */
router.get( '/api/users', function(req, res) {
  Users.find( function(err, users) {
    if (err) return next( err );
    res.json( users );
  });
});

router.post( '/api/users', function( req, res, next ) {
  Users.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* /api/users/:id */
router.get( '/api/users/:id', function( req, res ) {
  Users.find( {_id: req.params.id}, function( err, users ) {
    if ( err ) return next( err );
    res.json( users );
  });
});

router.delete( '/api/users/:id', function( req, res, next ) {
  Users.findByIdAndRemove(req.params.id, req.body, function ( err, post ) {
    if ( err ) return next( err )
    res.json( post )
  });
});

router.put( '/api/users/:id', function( req, res, next ) {
  Users.findByIdAndUpdate(req.params.id, req.body, function ( err, post ) {
    if ( err ) return next( err );
    res.json( post );
  });
});

module.exports = router;
