import Axios from 'axios'
import Promise from 'promise-polyfill'
import localApi from './localApi'

const prod = false

class api {
  /* static getVideos (quote) {
    if (prod) {
      let videoPromise = new Promise((resolve, reject) => {
        console.log('Fetching videos...')

        Axios.get('/api/weather')
          .then((response) => {
            console.log('success')
            videoPromise.resolve(response)
          })
          .catch((error) => {
            console.log('error')
            videoPromise.reject(error)
          })
      })

      return videoPromise
    } else {
      return localApi.getVideos()
    }
  } */

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
      return localApi.getWeather()
    }
  }
}

export default api
