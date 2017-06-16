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

/**
 * @param fromAddress - Customers address
 * @param toAddress - Sam's address
 * @description - This method creates a transaction which returns the skeleton transaction, then sends the transaction to the blockcypher api
 * @returns - Transaction skeleton
 */

'use strict'

const express = require('express')
const router = express.Router()
const request = require('request')

/* /api/newTransactions */
router.get('/api/newTransaction', function (req, res) {
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
})

/*
// Get latest unconfirmed transactions live
var ws = new WebSocket("wss://socket.blockcypher.com/v1/btc/main");
var count = 0;
ws.onmessage = function (event) {
  var tx = JSON.parse(event.data);
  var shortHash = tx.hash.substring(0, 6) + "...";
  var total = tx.total / 100000000;
  var addrs = tx.addresses.join(", ");
  $('#browser-websocket').before("<div>Unconfirmed transaction " + shortHash + " totalling " + total + "BTC involving addresses " + addrs + "</div>");
  count++;
  if (count > 10) ws.close();
}
ws.onopen = function(event) {
  ws.send(JSON.stringify({event: "unconfirmed-tx"}));
}
*/

module.exports = router
