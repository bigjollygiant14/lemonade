import * as types from '../constants/actionTypes'

export function updatePrice (currentBitcoinPrice) {
  return { type: types.LOAD_CURRENT_BITCOIN_SUCCESS, currentBitcoinPrice }
}
