// import Promise from 'promise-polyfill'
import localApi from './localApi'

const prod = true

class api {
  static getVideos (quote) {
    if (prod) {
      /* let videoPromise = new Promise((resolve, reject) => {
        // console.log('Fetching videos...')

        Axios.get('/api/weather')
          .then((response) => {
            console.log('success')
            videoPromise.resolve(response)
          })
          .catch((error) => {
            console.log('error')
            videoPromise.reject(error)
          })
      }) */

      // return videoPromise
    } else {
      // return localApi.getVideos()
    }
  }
}

export default api
