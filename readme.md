# React Boilerplate

## Stack
* Webpack 3
* React
  * React Router
  * React Redux
  * Redux Thunk
  * Axios for HTTP Requests
* Babel (ES6)
  * Promise Polyfill
* SASS
* Socket.io
  * BitcoinAverage
* EsLint (JS)
* Unit Testing (Jest and Enzyme)

## Data
* Bitcoin Price: Bitcoin Average - Gotta know what you\'re getting paid for
* Weather: Darksky - What if Sam's client asks about the weather??
* Bitcoin Transaction: Blockcypher - Blockchain.info is having cert issues

## Install
1. Clone Repo
2. Run `npm install` (or `pnpm install`)
3. Run `npm start` - Runs test suites -> cleans `./docs` -> copies index -> builds -> spins up express server and client server with HMR

Other Methods:
1. `npm run test` - Run test suites
2. `npm run coverage` - Run test suites with coverage report - outputs HTML to ./coverage
3. `npm run build` - Lints, then transpiles, then bundles all your code

_`npm run clean` will clean the docs folder_

## Methodology
### Description
Blockchain.info, which was recommended, was having cert issues so I used Blockcypher.com's API (https://www.blockcypher.com/dev/bitcoin/#testing). They have a test API that allows you to create addresses and transactions between fake accounts which was useful for this project. For the socket updating Bitcoin exchange rate, I used BitcoinAverage (https://bitcoinaverage.com) for data and Socket.io in my App to update the price in the dashboard.

First, I created the `/api/newAddress` route in my passthrough (since I'm working locally, I had to deal with CORS), then used Postman to create Sam's address. This is saved in the server so as not to expose his address in the client. Next, I created the `/api/myTransactions` route, to display Sam's transactions in the browser. At this point, we have an address for Sam, and a way to display his transaction history.

The rest of the flow can be completed in the browser. The dashboard shows information that will be helpful to Sam: Current weather info since the warmer it is, the more Lemonade Sam will sell; the current exchange rate of Bitcoin to USD; a list of recent transactions; and a button to create new transactions as well as a footer with some links people might ask about.

From the new transaction page, you can enter an address, or generate a new address and specify the amount (in bitcoins) to send to Sam.

Lastly, since the APIs are rate limited on the free tier, I collected sample JSON for every outside service, and return sample data instead of hitting the real API. Local requests have a timeout of `1000ms` to simulate the delay in response from a webservice.

### Postman
To test and update users on the fly, all API routes were created in Postman and tested.

### Socket
Usually, we can just use react-websocket to hit the socket directly, but since I'm working locally, I needed to set up a proxy to avoid CORS. So, I'm using socket.io to poll BitcoinAverage and save the average to state, so we can use it for transactions and display.

### Transactions
Creating a transaction in a test environment requires four steps
1. Create test address
2. Add funds to the test address
3. Create transaction skeleton with address + test fund - If you have no funds in test customer address, the skeleton fails because 0 < whatever value youre sending
4. Send the transaction skeleton to /txs/send to test the functionality
5. Profit

Faucet to add funds - `https://api.blockcypher.com/v1/bcy/test/faucet?token=$YOUR_TOKEN`

## Next Steps
If this project were to continue, there are a bunch of things I would like to add or improve on. 

React-ify: First, I would extract common components (such as form inputs) to a directory and reuse them. Then I would add immutable.js to ensure the state wasn't being changed by user actions. 

UI: There's a lot that can be done here. I think it would be cool to add a temporary color change to the bitcoin price (red for price drop, green for price increase). I've added a boolean, but haven't hooked the styles up yet. It would also be great to create a mobile nav and footer so Sam can execute his payments on a phone, possibly with square. I had targeted iPad as I thought that made the most sense.

Build: Now I'm going to nitpick. Due to time contraints, I used an older Webpack build I created that uses Gulp as the taskrunner. NPM is powerful enough now that you really don't need Gulp anymore, so I would remove that. Next, I was getting some reloading errors in the build, but I think revisiting Gulp / BrowserSync / Webpack, I could use a differnt process to both fix the reload issue and add CSS injecting so we don't need to reload the whole page for a color change. Similarly, I would change the build to only run tests when .JS or .JSX files have been changed. There's no need to run unit tests for style changes. Speaking of linters, it would probably be good to add a style linter. Lastly, when I have everything the way I want it, I would do all the Prod configuration to enable an easy deploy for Sammy Sosa.

Thanks for checking out my React Lemonade-Stand app!

## To Be Completed:
1. Bitcoin TX - Test
2. Jest - Continuously Run Tests on changed components only
3. Webpack optimization
  * Split major blocks of code into chunks
  * Common Chunks
  * Production Optimization
  * Extract CSS into a CSS file (extract-text-webpack-plugin) to avoid FOUAP (Flash of Ugly Ass Page).
4. Clean up web express code

**Never push compiled code. Compiled code is for GitHub Pages only**