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
 * Creating a transaction in a test environment requires four steps
 * 1) Create test address
 * 2) Add funds to the test address
 * 3) Create transaction skeleton with address + test fund - If you have no funds in test customer address, the skeleton fails because you pass a transaction value
 * 4) Send the transaction skeleton to /txs/send to test the functionality
 */
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

    // execute the tx now that we have the body
    res.json(executeTx(body))
  })
})

/**
 * @desc Send TX skeleton to execute
 * @param body @object - tx
 * @return tx @object - final transaction
 */
function executeTx (txSkeleton) {
  let options = {
    host: 'https://api.blockcypher.com/v1/bcy/test',
    path: '/txs/send'
  }

  let payload = {
    url: options.host + options.path + '?token=' + blockCypherToken,
    method: 'POST',
    body: txSkeleton
  }

  request(payload, function (err, response, body) {
    if (err) return err
    // res.json(body)
    return body
  })
}

module.exports = router
