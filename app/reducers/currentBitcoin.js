import * as types from '../constants/actionTypes'
import initialState from './initialState'

export default function currentBitcoinReducer (state = initialState.currentBitcoinPrice, action) {
  switch (action.type) {
    case types.LOAD_CURRENT_BITCOIN_SUCCESS :
      console.log('Reducing', action)
      return Object.assign({}, ...state, action.currentBitcoinPrice)

    default:
      return state
  }
}
