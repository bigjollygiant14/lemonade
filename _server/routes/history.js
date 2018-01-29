'use strict'

const express = require('express')
const router = express.Router()
const request = require('request')

/* /api/weather */
router.get('/api/history', function (req, res) {
  let options = {
    host: 'https://min-api.cryptocompare.com',
    path: '/data/histominute?fsym=' + req.query.fsym+ '&tsym=BTC&limit=60&aggregate=3&e=coinbase' //XMR, DOGE, LTC
  }

  request(options.host + options.path, function (err, response, body) {
    if (err) return err
    res.json(body)
  })
})

module.exports = router
