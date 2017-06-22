/**
 * @param {Number} amount - amount of bitcoins
 * @param {Number} rate - amount of bitcoins
 * @returns {String}
 * @description Converts bitcoins to dollars
 */
export function convertBitcoinToDollars (amount, rate) {
  return amount * rate
}
