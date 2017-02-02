'use strict';

const express = require('express'),
      router = express.Router(),
      mongoose = require('mongoose'),
      path = require('path');

router.get('/', function(req, res) {
  var indexPath = path.join(__dirname, '/../../app', req.url);
  res.sendFile( indexPath );
});

module.exports = router;
