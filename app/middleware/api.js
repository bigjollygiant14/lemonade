import Axios from 'axios'
import Promise from 'promise-polyfill'
import localApi from './localApi'

const prod = true

class api {
  static getWeather () {
    if (prod) {
      let weatherPromise = new Promise((resolve, reject) => {
        Axios.get('/api/weather')
          .then((response) => {
            resolve(JSON.parse(response.data))
          })
          .catch((error) => {
            reject(error)
          })
      })

      return weatherPromise
    } else {
      console.log('Fetching local weather...')
      return localApi.getWeather()
    }
  }

  static getTransactionHistory () {
    if (prod) {
      let txPromise = new Promise((resolve, reject) => {
        Axios.get('/api/myTransactions')
          .then((response) => {
            resolve(JSON.parse(response.data))
          })
          .catch((error) => {
            reject(error)
          })
      })

      return txPromise
    } else {
      console.log('Fetching local transaction history...')
      return localApi.getTransactionHistory()
    }
  }

  static createAddress () {
    if (prod) {
      let addressPromise = new Promise((resolve, reject) => {
        Axios.post('/api/newAddress')
          .then((response) => {
            resolve(JSON.parse(response.data))
          })
          .catch((error) => {
            reject(error)
          })
      })

      return addressPromise
    } else {
      console.log('Fetching local address...')
      return localApi.createAddress()
    }
  }

  static createTransaction (payload) {
    if (prod) {
      let txPromise = new Promise((resolve, reject) => {
        Axios.post('/api/getTxSkeleton', payload)
          .then((response) => {
            resolve(JSON.parse(response.data))
          })
          .catch((error) => {
            reject(error)
          })
      })

      return txPromise
    } else {
      console.log('Fetching local transaction...')
      return localApi.createTransaction()
    }
  }
}

export default api
