import * as types from '../constants/actionTypes'
import initialState from './initialState'

export default function addressReducer (state = initialState.txHistory, action) {
  switch (action.type) {
    case types.GET_TRANSACTION_HISTORY_SUCCESS :
      return Object.assign({}, ...state, action.txHistory)

    default:
      return state
  }
}
