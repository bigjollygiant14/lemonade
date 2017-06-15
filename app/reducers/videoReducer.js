import * as types from '../constants/actionTypes'
import initialState from './initialState'

export default function videoReducer (state = initialState.videoData, action) {
  switch (action.type) {
    case types.LOAD_VIDEOS_SUCCESS :
      return Object.assign({}, ...state, action.videoData)

    default:
      return state
  }
}
