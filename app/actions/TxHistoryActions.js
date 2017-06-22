import * as types from '../constants/actionTypes'
import api from '../middleware/api'

export function getTransactionHistorySuccess (txHistory) {
  return { type: types.GET_TRANSACTION_HISTORY_SUCCESS, txHistory }
}

export function getTransactionHistory () {
  return function (dispatch) {
    return api.getTransactionHistory()
      .then(txHistory => {
        dispatch(getTransactionHistorySuccess(txHistory))
      }).catch(error => {
        throw error
      })
  }
}
