/**
 * @param {Number} date - 2017-06-22T00:34:47Z
 * @returns {String}
 * @description Converts date to locale format [Jun 07, 2014] MMM DD, YYYY
 */
export function getFormattedDate (date) {
  date = new Date(date)

  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}
