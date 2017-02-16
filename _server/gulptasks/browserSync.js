'use strict';

const bs = require('browser-sync')

module.exports = () => {
  bs.init(null, {
    proxy: 'localhost:5000',
  });
}