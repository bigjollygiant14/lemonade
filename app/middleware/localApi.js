import delay from './delay' // simluate delay in ajax response

/* const videoResponse = {
  response: 'hi'
} */

const weatherResponse = {
  response: {
    temperature: 87
  }
}

class localApi {
  /* static getVideos () {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign({}, videoResponse))
      }, delay)
    })
  } */

  static getWeather () {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign({}, weatherResponse))
      }, delay)
    })
  }
}

export default localApi
