import delay from './delay'

const videoResponse = {
  response: 'hi'
}

class localApi {
  static getVideos () {
    /* return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign({}, videoResponse))
      }, delay)
    }) */
  }
}

export default localApi
