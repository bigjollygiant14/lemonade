// /addrs/$ADDRESS GET -- Get transactions for an address
// \_ Static add for Sam
// \_ Dynamic add for clients
// /addrs POST -- Generate Address endpoint
// /txs/new
/* var newtx = {
  inputs: [{addresses: ['CEztKBAYNoUEEaPYbkyFeXC5v8Jz9RoZH9']}],
  outputs: [{addresses: ['C1rGdt7QEPGiwPMFhNKNhHmyoWpa5X92pn'], value: 100000}]
};
$.post('https://api.blockcypher.com/v1/bcy/test/txs/new', JSON.stringify(newtx))
  .then(function(d) {console.log(d)});
*/
'use strict'

const express = require('express')
const router = express.Router()
const request = require('request')
const blockCypherToken = 'dab3cdfb592a4540b03ab9cef27f0f38'

// Sams Wallet Info
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
    path: '/addrs/$ADDRESS'
  }

  request(options.host + options.path, function (err, response, body) {
    if (err) return err
    res.json(body)
  })
}) // Generate a New Address

router.post('/api/newAddress', (req, res) => {
  let options = {
    host: 'https://api.blockcypher.com/v1/bcy/test',
    path: '/addrs'
  }

  let payload = {
    url: options.host + options.path,
    method: 'POST'
  }

  request(payload, function (err, response, body) {
    console.log(response)
    if (err) return err
    console.log(body)
    res.json(body)
  })
})

/* /api/newTransactions */
/* router.get('/api/newTransaction', function (req, res) {
  let options = {
    // host: 'https://api.darksky.net',
    host: '',
    // path: '/forecast/4d3742229911a7ab0097f0546f53b023/40.483,-106.829'
    path: '/txs/new'
  }

  request(options.host + options.path, function (err, response, body) {
    if (err) return err
    res.json(body)
  })
}) */

/*
// Get latest unconfirmed transactions live
var ws = new WebSocket('wss://socket.blockcypher.com/v1/btc/main');
var count = 0;
ws.onmessage = function (event) {
  var tx = JSON.parse(event.data);
  var shortHash = tx.hash.substring(0, 6) + '...';
  var total = tx.total / 100000000;
  var addrs = tx.addresses.join(', ');
  $('#browser-websocket').before('<div>Unconfirmed transaction ' + shortHash + ' totalling ' + total + 'BTC involving addresses ' + addrs + '</div>');
  count++;
  if (count > 10) ws.close();
}
ws.onopen = function(event) {
  ws.send(JSON.stringify({event: 'unconfirmed-tx'}));
}
*/

module.exports = router
