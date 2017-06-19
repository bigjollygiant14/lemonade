import * as types from '../constants/actionTypes'
import api from '../middleware/api'

export function getWeatherSuccess (weatherInfo) {
  return { type: types.LOAD_WEATHER_SUCCESS, weatherInfo }
}

export function getWeather () {
  return function (dispatch) {
    return api.getWeather()
      .then(weatherInfo => {
        dispatch(getWeatherSuccess(weatherInfo))
      }).catch(error => {
        throw error
      })
  }
}
