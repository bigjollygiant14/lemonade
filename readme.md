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

## To Be Added:
1. Bitcoin TX
2. Break larger components up
3. immutable.js
4. Mobile Header / Footer
5. Build
  1. Add Style Livereload
  2. Minification and Maps
  3. Set node env vars
  4. Only run tests when js or jsx changes

**Never push compiled code. Compiled code is for GitHub Pages only**