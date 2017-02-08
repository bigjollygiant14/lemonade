module.exports = function (value, decimalPlaces) {
  let num = value.toString(),
      val;

  decimalPlaces = decimalPlaces && Number(decimalPlaces) !== 0 ? Number(decimalPlaces) : 0

  if (decimalPlaces !== 0) {
    let numArr = num.split('.');
    val = numArr[0] + '.' + numArr[1].substring(0, Number(decimalPlaces));
  } else {
    let numArr = num.split('.');
    val = numArr[0];
  }

  return Number(val);
};