'use strict'

const express = require('express')
const router = express.Router()
const request = require('request')
const blockCypherToken = 'dab3cdfb592a4540b03ab9cef27f0f38'

// Sams Wallet Info - Created using the api/newAddress route in postman
const myAddress = {
  'private': 'b1b1c02499aad61dc2a883b46fa227d4056440676d3e4d6451d90196c84ad6c3',
  'public': '030d8d2063a5b133bfab264c12f226f0fc3406e79e18a310b0a787a47050c02abc',
  'address': 'C2DpNVTebjiBtYN3PPcFzppPkfKNEhFm2y',
  'wif': 'BuHSnQWrsty36rL2jLCFt9gagF6W8xvfSWNjfUDRtDSF7GjK35G3'
}

// Signing
const bitcoin = require('bitcoinjs-lib')
const bigi = require('bigi')
const buffer = require('buffer')
const keys = new bitcoin.ECPair(bigi.fromHex(myAddress.private))

// Get Sam's Transactions
router.get('/api/myTransactions', (req, res) => {
  let options = {
    host: 'https://api.blockcypher.com/v1/bcy/test',
    path: '/addrs/' + myAddress.address
  }

  request(options.host + options.path, function (err, response, body) {
    if (err) return err
    res.json(body)
  })
})

// Generate a New Address, then add funds to the account
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

    // add 20 btc to the test address
    addFunds(body)
  })
})

/**
 * @desc Hitting this route creates a transaction skeleton
 * @param req.body - req.body (Object) - request object
 * @returns TX Skeleton
 * {
 *   customerAddress - String - Bitcoin address to take internet monies from
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
      'inputs': [
        {
          'addresses': [req.body.customerAddress]
        }
      ],
      'outputs': [
        {
          'addresses': [myAddress.address],
          'value': req.body.value
        }
      ]
    })
  }

  request(payload, function (err, response, body) {
    if (err) return err

    // sign tx - use compressed public key
    body = JSON.parse(body)
    body.pubkeys = []
    body.signatures = body.tosign.map(function (tosign, n) {
      body.pubkeys.push(keys.getPublicKeyBuffer().toString('hex'))
      return keys.sign(new buffer.Buffer(tosign, 'hex')).toDER().toString('hex')
    })

    // THIS SIGNING ISN'T WORKING. GETTING ERROR FROM BLOCKCYPHER API
    res.json(executeTx(body))
  })
})

/**
 * @desc Add 20 btc to test customer address
 * @param body address body
 * @return object transaction reference
 */
function addFunds (body) {
  let options = {
    host: 'https://api.blockcypher.com/v1/bcy/test',
    path: '/faucet'
  }

  let newBody = JSON.parse(body)
  let address = newBody.address

  let payload = {
    url: options.host + options.path + '?token=' + blockCypherToken,
    method: 'POST',
    body: JSON.stringify({
      address: address,
      amount: 1000000
    })
  }

  console.log('Adding funds to: ', address)
  request(payload, function (err, response, body) {
    if (err) return err
    // res.json(body)
    console.log('Funds added to ' + address + ': ', body)
  })
}

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
    body: JSON.stringify(txSkeleton)
  }

  console.log('Sending Final Signed Payment with Payload: ', payload)

  request(payload, function (err, response, body) {
    if (err) return err
    console.log('Transaction Completed: ', body)
    return JSON.parse(body)
  })
}

module.exports = router
