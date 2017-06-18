import delay from './delay' // simluate delay in ajax response

/* const videoResponse = {
  response: 'hi'
} */

const weatherResponse = {
  response: {
    apparentTemperature: 66.05,
    humidity: 0.25,
    icon: "clear-day",
    summar: "Clear",
    temperature: 72.96,
    time: 1497812237
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
