import delay from './delay' // simluate delay in ajax response

const weatherResponse = {
  response: {
    apparentTemperature: 66.05,
    humidity: 0.25,
    icon: 'clear-day',
    summar: 'Clear',
    temperature: 72.96,
    time: 1497812237
  }
}

const createAddressResponse = {
  response: {
    'private': 'c0cb30743a652c5675a2d0c363e63a22de22ca5ff3ea1e7ee08c5adc8679a86b',
    'public': '03fda77e58e52be7b1df127a6288b46315c7443740b79edcdc0cde0604e577db8b',
    'address': 'C1QX5PcfNhXA9xSZmZ7qxT6NrhdKDMEfGr',
    'wif': 'Buno9rGW8ssd2q2eWYyrZ82UxarSnciGZGp7Nb1P4oL48cj4uqY6'
  }
}

const createTxResponse = {
  response: {
    'foo': 'bar'
  }
}

const txHistory = {
  response: {
    'address': 'C4ySGV7V8MCoxe6sDwoKP7BNw3jUVxQEJK',
    'total_received': 100,
    'total_sent': 0,
    'balance': 100,
    'unconfirmed_balance': 0,
    'final_balance': 100,
    'n_tx': 1,
    'unconfirmed_n_tx': 0,
    'final_n_tx': 1,
    'txrefs': [
      {
        'tx_hash': 'ccc422e2ace79b6df2a9baecc8b2294e8cec731e91e126aef8a5f577c26b3da2',
        'block_height': 1369855,
        'tx_input_n': -1,
        'tx_output_n': 0,
        'value': 100,
        'ref_balance': 100,
        'spent': false,
        'confirmations': 2,
        'confirmed': '2017-06-22T00:34:47Z',
        'double_spend': false
      }
    ],
    'tx_url': 'https://api.blockcypher.com/v1/bcy/test/txs/'
  }
}

class localApi {
  static createAddress () {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign({}, createAddressResponse.response))
      }, delay)
    })
  }

  static createTransaction () {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign({}, createTxResponse.response))
      }, delay)
    })
  }

  static getTransactionHistory () {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign({}, txHistory.response))
      }, delay)
    })
  }

  static getWeather () {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign({}, weatherResponse.response))
      }, delay)
    })
  }
}

export default localApi
