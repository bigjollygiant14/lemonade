import Axios from 'axios'
import Promise from 'promise-polyfill'
import localApi from './localApi'

const prod = false

class api {
  static getWeather () {
    if (prod) {
      let weatherPromise = new Promise((resolve, reject) => {
        console.log('Fetching weather...')

        Axios.get('/api/weather')
          .then((response) => {
            console.log('success', response)
            resolve(JSON.parse(response.data))
          })
          .catch((error) => {
            console.log('error: ', error)
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
        console.log('Fetching transaction history...')

        Axios.get('/api/myTransactions')
          .then((response) => {
            console.log('success', response)
            resolve(JSON.parse(response.data))
          })
          .catch((error) => {
            console.log('error: ', error)
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
        console.log('Creating address...')

        Axios.post('/api/newAddress')
          .then((response) => {
            console.log('success', response)
            resolve(JSON.parse(response.data))
          })
          .catch((error) => {
            console.log('error: ', error)
            reject(error)
          })
      })

      return addressPromise
    } else {
      console.log('Fetching local address...')
      return localApi.createAddress()
    }
  }

  static createTransaction () {
    if (prod) {
      let txPromise = new Promise((resolve, reject) => {
        console.log('Creating transaction...')

        Axios.post('/api/getTxSkeleton')
          .then((response) => {
            console.log('success', response)
            resolve(JSON.parse(response.data))
          })
          .catch((error) => {
            console.log('error: ', error)
            reject(error)
          })
      })

      return txPromise
    } else {
      console.log('Fetching local address...')
      return localApi.createTransaction()
    }
  }
}

export default api
