import * as types from '../constants/actionTypes'
import initialState from './initialState'

export default function videoReducer (state = initialState.counter, action) {
  switch (action.type) {
    case types.INCREMENT_COUNTER:
      return state + 1

    case types.DECREMENT_COUNTER:
      return state - 1

    default:
      return state
  }
}
