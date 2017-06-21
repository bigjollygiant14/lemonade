'use strict'

const express = require('express')
const router = express.Router()
const request = require('request')
const blockCypherToken = 'dab3cdfb592a4540b03ab9cef27f0f38'

// Sams Wallet Info - Created using the api/newAddress route in postman 
const myAddress = {
  'private': 'b07844692614f8677f70d917462bbcacaaa3b3a9c350f8d7ada48fe19e2be874',
  'public': '0260435a3b82bd5105224261c5492f8e7e1bd50905e00930bbb775803cf2c97ed7',
  'address': 'C4ySGV7V8MCoxe6sDwoKP7BNw3jUVxQEJK',
  'wif': 'BuF4ittBxYAVaeXCkp36ueKAPakw2FArKzn85qRmqLUXYrHSpXbH'
}

// Get Sam's Transactions
router.get('/api/myTransactions', (req, res) => {
  let options = {
    host: 'https://api.blockcypher.com/v1/bcy/test',
    path: '/addrs/' + myAddress.address
  }

  request(options.host + options.path, function (err, response, body) {
    if (err) return err
    console.log(body)
    res.json(body)
  })
})

// Generate a New Address
router.post('/api/newAddress', (req, res) => {
  let options = {
    host: 'https://api.blockcypher.com/v1/bcy/test',
    path: '/addrs'
  }

  let payload = {
    url: options.host + options.path + '?token=' + blockCypherToken,
    method: 'POST'
  }

  request(payload, function (err, response, body) {
    if (err) return err
    res.json(body)
  })
})

/**
 * @desc Hitting this route creates a transaction skeleton
 * @param req.body - req.body (Object) - request object
 * @returns TX Skeleton
 * {
 *   fromAddress - String - Bitcoin address to take internet monies from
 *   value - Number - Number of internet monies to take
 * }
 */
router.post('/api/getTxSkeleton', (req, res) => {
  let options = {
    host: 'https://api.blockcypher.com/v1/bcy/test',
    path: '/txs/new'
  }

  let payload = {
    url: options.host + options.path + '?token=' + blockCypherToken,
    method: 'POST',
    body: JSON.stringify({
      inputs: [
        {
          addresses: ['' + req.body.fromAddress]
        }
      ],
      outputs: [
        {
          addresses: [myAddress.address],
          value: req.body.value
        }
      ]
    })
  }

  request(payload, function (err, response, body) {
    if (err) return err
    res.json(body)
  })
})

module.exports = router
