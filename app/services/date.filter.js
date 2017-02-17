module.exports = function (value, format, spacer) {
  let year = ''
  let month = ''
  let day = ''
  let date = new Date(value)
  let splitFormat = format.toLowerCase().split('-')
  let monthsArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  format = format.toLowerCase()

  // format day
  day = date.getUTCDate()

  // format month
  month = format.indexOf('m') !== -1 && format.match(/m/gi).length === 3 ? monthsArr[date.getUTCMonth()] : date.getUTCMonth() + 1

  // format year
  year = date.getUTCFullYear()
  if (format.indexOf('y') !== -1 && format.match(/y/gi).length === 2) year = String(year).slice(2, 4)

  // assemble string
  var string = ''
  for (var i = 0; i < splitFormat.length; i++) {
    if (splitFormat[i].indexOf('m') !== -1) {
      string += month
    } else if (splitFormat[i].indexOf('y') !== -1) {
      string += year
    } else {
      string += day
    }

    if (i !== splitFormat.length - 1) string += spacer
  }

  return string
}
