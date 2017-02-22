'use strict'

const express = require('express')
const router = express.Router()
const request = require('request')

/* /api/weather */
router.get('/api/weather', function (req, res) {
  let options = {
    host: 'https://api.darksky.net',
    path: '/forecast/4d3742229911a7ab0097f0546f53b023/40.483,-106.829'
  }

  request(options.host + options.path, function (err, response, body) {
    if (err) return err
    res.json(body)
  })
})

module.exports = router
