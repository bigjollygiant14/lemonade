# React Boilerplate

## Stack
* Webpack 2
* Gulp
* React
  * React Router
  * React Redux
  * Redux Thunk
  * Axios for HTTP Requests
* Babel (ES6)
  * Promise Polyfill
* SASS
* EsLint (JS)
* Unit Testing (Jest and Enzyme)

## Data
* Bitcoin Price: Bitcoin Average - Gotta know what you\'re getting paid for
* Weather: Darksky - What if Sam's client asks about the weather??
* Bitcoin Transaction: Blockcypher - Blockchain.info is having cert issues

## Install
1. Clone Repo
2. Run `npm install` (or `pnpm install`)
3. Run `gulp` or `npm start`
4. Browser will open to localhost:3000

_`npm run clean` will clean the docs folder_

## Methodology
### Description
Blockchain.info, which was recommended, was having cert issues so I used Blockcypher.com's API (https://www.blockcypher.com/dev/bitcoin/#testing). They have a test API that allows you to create addresses and transactions between fake accounts which was useful for this project. For the socket updating Bitcoin exchange rate, I used BitcoinAverage (https://bitcoinaverage.com) for data and Socket.io in my App to update the price in the dashboard.

First, I created the `/api/newAddress` route in my passthrough (since I'm working locally, I had to deal with CORS), then used Postman to create Sam's address. This is saved in the server so as not to expose his address in the client. Next, I created the `/api/myTransactions` route, to display Sam's transactions in the browser. At this point, we have an address for Sam, and a way to display his transaction history.

The rest of the flow can be completed in the browser. The dashboard shows information that will be helpful to Sam: Current weather info since the warmer it is, the more Lemonade Sam will sell; the current exchange rate of Bitcoin to USD; a list of recent transactions; and a button to create new transactions as well as a footer with some links people might ask about.

From the new transaction page, you can enter an address, or generate a new address and specify the amount (in bitcoins) to send to Sam.

Lastly, since the APIs are rate limited on the free tier, I collected sample JSON for every outside service, and return sample data instead of hitting the real API.

### Sample New Transaction Workflow
Create Address -> Generate transaction (tx) skeleton -> send tx skeleton in transaction -> Check tx's in Sam's transactions -> Profit
Faucet to add funds - `https://api.blockcypher.com/v1/bcy/test/faucet?token=$YOUR_TOKEN`

### Socket
Usually, we can just use react-websocket to hit the socket directly, but since I'm working locally, I needed to set up a proxy to avoid CORS. So, I'm using socket.io and redux-socket.io to poll BitcoinAverage and save the average to state, so we can use it for transactions and display.

Creating a transaction in a test environment requires four steps
1. Create test address
2. Add funds to the test address
3. Create transaction skeleton with address + test fund - If you have no funds in test customer address, the skeleton fails because 0 < whatever value youre sending
4. Send the transaction skeleton to /txs/send to test the functionality

## To Be Added:
1. Bitcoin TX - Test
2. redux-socket.io && light styling for up or down in value
3. Break larger components up
4. immutable.js
5. Mobile Header / Footer
6. Build Upgrade
    * Add Style Livereload
    * Minification and Maps
    * Set node env vars
    * Only run tests when js or jsx changes

**Never push compiled code. Compiled code is for GitHub Pages only**