/**
 * @param {Number} amount - amount of bitcoins
 * @param {Number} rate - current rate of bitcoins to dollars
 * @returns {String}
 * @description Converts bitcoins to dollars
 */
export function convertBitcoinToDollars (amount, rate) {
  return amount * rate
}

/**
 * @param {Number} amount - amount of dollars
 * @param {Number} rate - current rate of bitcoins to dollars
 * @returns {String}
 * @description Converts dollars to bitcoins
 */
export function convertDollarsToBitcoin (amount, rate) {
  return amount / rate
}

/**
 * @param {Number} amount - amount of dollar dollar bills yall
 * @returns {String} string formatted currency
 * @description Takes a number and converts it to dollar presentation
 */
export function displayCurrency (amount) {
  return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
}
