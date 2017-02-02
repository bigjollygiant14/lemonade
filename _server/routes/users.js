'use strict';

const express = require( 'express' ),
      router = express.Router(),
      mongoose = require( 'mongoose'),
      Users = require( '../models/Users.js' );

// module.exports = function(app) {
  /* app.get('/api/users', function(req, res, next) {
    Users.find(function (err, users) {
      if (err) return next(err);
      console.log('SHIT', users);
      res.json(users);
    });
  }); */
router.get( '/api/users', function(req, res) {
  Users.find( function(err, users) {
    if (err) return next( err );
    res.json( users );
  });
});

router.post( '/api/users', function(req, res, next) {
  // User.create(req.body, function (err, post) {
    // if (err) return next(err);
    // res.json(post);
  // });
  console.log( 'POSTING SHIT BIRD' );
});
// };

module.exports = router;

/* router.delete('/:id', function(req, res, next) {
  User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.post('/', function(req, res, next) {
  User.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
}); */

/*
router.get('/', function(req, res, next) {
  Card.find(function (err, cards) {
    if (err) return next(err);
    res.json(cards);
  });
});

router.get('/:id', function(req, res, next) {
  Card.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.put('/:id', function(req, res, next) {
  Card.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
*/

// module.exports = router;