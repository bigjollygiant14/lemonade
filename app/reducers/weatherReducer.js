import * as types from '../constants/actionTypes'
import initialState from './initialState'

export default function weatherReducer (state = initialState.weatherInfo, action) {
  switch (action.type) {
    case types.LOAD_WEATHER_SUCCESS :
      return Object.assign({}, ...state, action.weatherInfo)

    default:
      return state
  }
}
